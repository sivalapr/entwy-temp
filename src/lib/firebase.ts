import { initializeApp, getApps } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  type Firestore
} from 'firebase/firestore';

const metaEnv = (typeof import.meta !== 'undefined' && (import.meta as any).env) || {};

export const DEFAULT_FIREBASE_CONFIG = {
  apiKey: metaEnv.VITE_FIREBASE_API_KEY || "AIzaSyB9FXZGKea6fBeE-8JTepsXeHWt_6Cbu4s",
  authDomain: metaEnv.VITE_FIREBASE_AUTH_DOMAIN || "entwy-dashboard.firebaseapp.com",
  projectId: metaEnv.VITE_FIREBASE_PROJECT_ID || "entwy-dashboard",
  storageBucket: metaEnv.VITE_FIREBASE_STORAGE_BUCKET || "entwy-dashboard.firebasestorage.app",
  messagingSenderId: metaEnv.VITE_FIREBASE_MESSAGING_SENDER_ID || "390796305883",
  appId: metaEnv.VITE_FIREBASE_APP_ID || "1:390796305883:web:ea1a4f66168d9c6235f3fe",
  measurementId: metaEnv.VITE_FIREBASE_MEASUREMENT_ID || "G-FR6SWJQWWQ"
};

/**
 * Reads Firebase configuration from localStorage (synced with dashboard) or env vars.
 */
export const getActiveFirebaseConfig = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem('entwy_firebase_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object' && parsed.projectId) {
          return {
            ...DEFAULT_FIREBASE_CONFIG,
            ...parsed
          };
        }
      }
    }
  } catch (err) {
    console.warn('Failed to read Firebase config from localStorage:', err);
  }
  return DEFAULT_FIREBASE_CONFIG;
};

export const firebaseConfig = getActiveFirebaseConfig();

function initApp(config: typeof DEFAULT_FIREBASE_CONFIG) {
  const existingApps = getApps();
  if (existingApps.length > 0) {
    return existingApps[0];
  }
  return initializeApp(config);
}

export const app = initApp(firebaseConfig);
export const db: Firestore = getFirestore(app);

// Data Types
export interface CareerApplicationData {
  fullName: string;
  email: string;
  phone?: string;
  role: string;
  department?: string;
  experience?: string;
  linkedin?: string;
  resumeUrl?: string;
  coverNote?: string;
}

export interface ContactEnquiryData {
  name: string;
  email: string;
  company?: string;
  type?: string;
  budget?: string;
  details?: string;
  source?: string;
}

/**
 * Submit candidate career application to Firestore 'applications' and log to 'activity_logs'
 */
export const submitCareerApplication = async (data: CareerApplicationData) => {
  try {
    const docRef = await addDoc(collection(db, 'applications'), {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone || '',
      role: data.role,
      department: data.department || 'ENGINEERING',
      experience: data.experience || 'Not specified',
      linkedin: data.linkedin || '',
      resumeUrl: data.resumeUrl || '',
      coverNote: data.coverNote || '',
      status: 'new',
      source: 'Marketing Site (Careers)',
      appliedAt: new Date().toISOString(),
      createdAt: serverTimestamp()
    });

    // Write to activity logs
    try {
      await addDoc(collection(db, 'activity_logs'), {
        type: 'career_application',
        title: `New application: ${data.fullName}`,
        message: `Applied for ${data.role} (${data.department || 'ENGINEERING'})`,
        applicantEmail: data.email,
        createdAt: serverTimestamp(),
        timestamp: new Date().toISOString()
      });
    } catch (logErr) {
      console.warn('Activity log writing error:', logErr);
    }

    return { success: true, id: docRef.id };
  } catch (err: any) {
    console.error('Error submitting application to Firestore:', err);
    throw err;
  }
};

/**
 * Submit client inquiry / contact lead to Firestore 'contacts' and log to 'activity_logs'
 */
export const submitContactEnquiry = async (data: ContactEnquiryData) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      name: data.name,
      email: data.email,
      company: data.company || '',
      type: data.type || 'Project Enquiry',
      budget: data.budget || 'Not specified',
      details: data.details || '',
      status: 'new',
      source: data.source || 'Website Contact Form',
      submittedAt: new Date().toISOString(),
      createdAt: serverTimestamp()
    });

    // Write to activity logs
    try {
      await addDoc(collection(db, 'activity_logs'), {
        type: 'contact_enquiry',
        title: `New Inquiry: ${data.name}`,
        message: `${data.type || 'Project Enquiry'} from ${data.name} (${data.company || 'Direct'})`,
        email: data.email,
        createdAt: serverTimestamp(),
        timestamp: new Date().toISOString()
      });
    } catch (logErr) {
      console.warn('Activity log writing error:', logErr);
    }

    return { success: true, id: docRef.id };
  } catch (err: any) {
    console.error('Error submitting contact inquiry to Firestore:', err);
    throw err;
  }
};

/**
 * Submit newsletter subscriber to Firestore 'subscribers' and log to 'activity_logs'
 */
export const submitNewsletterSubscriber = async (email: string, source = 'Website Footer') => {
  try {
    const cleanEmail = email.trim();
    if (!cleanEmail) throw new Error('Email is required');

    const docRef = await addDoc(collection(db, 'subscribers'), {
      email: cleanEmail,
      source: source,
      subscribedAt: new Date().toISOString(),
      createdAt: serverTimestamp()
    });

    // Write to activity logs
    try {
      await addDoc(collection(db, 'activity_logs'), {
        type: 'newsletter_signup',
        title: `New Newsletter Subscriber`,
        message: `Subscribed: ${cleanEmail} via ${source}`,
        email: cleanEmail,
        createdAt: serverTimestamp(),
        timestamp: new Date().toISOString()
      });
    } catch (logErr) {
      console.warn('Activity log writing error:', logErr);
    }

    return { success: true, id: docRef.id };
  } catch (err: any) {
    console.error('Error subscribing to newsletter in Firestore:', err);
    throw err;
  }
};

export default db;
