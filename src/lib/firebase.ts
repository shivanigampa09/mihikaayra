import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDrGQ-FKfzMrDzG2elsUh58T6XFFwfvFQ8',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'mihika-ayra.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'mihika-ayra',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'mihika-ayra.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '816858616349',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:816858616349:web:9af75af217d9077373ecf4',
};

// Check if Firebase keys are configured
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.apiKey !== 'YOUR_API_KEY'
);

const app = !getApps().length && isFirebaseConfigured
  ? initializeApp(firebaseConfig)
  : getApps().length
  ? getApp()
  : null;

export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
