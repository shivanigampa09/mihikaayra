import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
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
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
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

  const login = async (email: string, password: string) => {
    if (!auth) {
      throw new Error('Firebase configuration is missing. Please add your Firebase credentials to the .env file.');
    }
    const cred = await signInWithEmailAndPassword(auth, email, password);
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
    await sendPasswordResetEmail(auth, email);
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

