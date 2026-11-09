import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, setDoc, getDoc, collection, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { auth, db, isFirebaseConfigured } from '../lib/firebase';

export interface UserProfile {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  companyName: string;
  sector: string;
  state: string;
  city: string;
  gstin?: string;
  createdAt?: any;
}

export interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  companyName: string;
  sector: string;
  state: string;
  city: string;
  gstin?: string;
  password: string;
}

interface AuthContextType {
  currentUser: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  isFirebaseConfigured: boolean;
  register: (data: RegisterInput) => Promise<void>;
  login: (identifier: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  resetPasswordByPhone: (phone: string) => Promise<{ email: string; maskedEmail: string; firstName: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch user profile from Firestore
  const fetchUserProfile = async (uid: string) => {
    if (!db) return;
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        setUserProfile(userDoc.data() as UserProfile);
      }
    } catch (err) {
      console.error('Error fetching user profile from Firestore:', err);
    }
  };

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchUserProfile(user.uid);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = async (data: RegisterInput) => {
    if (!auth || !db) {
      throw new Error('Firebase configuration is missing. Please add your Firebase credentials to the .env file.');
    }

    // 1. Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;

    // 2. Save full business profile into Cloud Firestore 'users' collection
    const profilePayload: UserProfile = {
      uid: user.uid,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      mobile: data.mobile,
      companyName: data.companyName,
      sector: data.sector,
      state: data.state,
      city: data.city,
      gstin: data.gstin || '',
      createdAt: serverTimestamp(),
    };

    await setDoc(doc(db, 'users', user.uid), profilePayload);
    setUserProfile(profilePayload);
  };

  const findUserByPhone = async (phone: string): Promise<UserProfile | null> => {
    if (!db) return null;
    const cleanInput = phone.replace(/\D/g, '');
    const last10 = cleanInput.slice(-10);
    if (last10.length < 10) return null;

    const usersRef = collection(db, 'users');

    // 1. Direct match query
    try {
      const q = query(usersRef, where('mobile', '==', phone.trim()));
      const snap = await getDocs(q);
      if (!snap.empty) {
        return snap.docs[0].data() as UserProfile;
      }
    } catch (err) {
      console.warn('Direct phone query fallback:', err);
    }

    // 2. Scan match last 10 digits
    try {
      const allSnap = await getDocs(usersRef);
      for (const docSnap of allSnap.docs) {
        const data = docSnap.data() as UserProfile;
        const cleanDbPhone = (data.mobile || '').replace(/\D/g, '');
        if (cleanDbPhone.slice(-10) === last10) {
          return data;
        }
      }
    } catch (err) {
      console.error('Error scanning users for phone:', err);
    }

    return null;
  };

  const login = async (identifier: string, password: string) => {
    if (!auth) {
      throw new Error('Firebase configuration is missing. Please add your Firebase credentials to the .env file.');
    }

    let emailToUse = identifier.trim();

    // If identifier is not an email (e.g. mobile number entered)
    if (!emailToUse.includes('@')) {
      const matched = await findUserByPhone(emailToUse);
      if (!matched || !matched.email) {
        throw new Error(`No account found with phone number "${identifier}". Please check your number or log in with your registered email.`);
      }
      emailToUse = matched.email;
    }

    const cred = await signInWithEmailAndPassword(auth, emailToUse, password);
    if (cred.user) {
      await fetchUserProfile(cred.user.uid);
    }
  };

  const logout = async () => {
    if (!auth) return;
    await signOut(auth);
    setUserProfile(null);
  };

  const resetPassword = async (email: string) => {
    if (!auth) {
      throw new Error('Firebase configuration is missing. Please add your Firebase credentials to the .env file.');
    }
    // Firebase automatically sends a secure password reset link to this email address!
    await sendPasswordResetEmail(auth, email.trim());
  };

  const resetPasswordByPhone = async (phone: string) => {
    if (!auth || !db) {
      throw new Error('Firebase configuration is missing. Please add your Firebase credentials to the .env file.');
    }

    const matched = await findUserByPhone(phone);
    if (!matched || !matched.email) {
      throw new Error(`No registered account found with phone number "${phone}". Please make sure this number was used during registration, or reset using your registered Email.`);
    }

    // Dispatch the password reset email to their verified registered email
    await sendPasswordResetEmail(auth, matched.email);

    // Mask the email for user privacy & verification
    const [namePart, domainPart] = matched.email.split('@');
    const maskedName = namePart.length > 2
      ? `${namePart[0]}${'*'.repeat(Math.max(namePart.length - 2, 3))}${namePart[namePart.length - 1]}`
      : `${namePart}***`;
    const maskedEmail = `${maskedName}@${domainPart}`;

    return {
      email: matched.email,
      maskedEmail,
      firstName: matched.firstName || 'Valued Client',
    };
  };

  const value: AuthContextType = {
    currentUser,
    userProfile,
    loading,
    isFirebaseConfigured,
    register,
    login,
    logout,
    resetPassword,
    resetPasswordByPhone,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

