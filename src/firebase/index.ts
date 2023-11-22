import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import FIREBASE_CONFIG from "./firebase.config.json";

// Initialize Firebase on first load
if (getApps().length === 0) {
  const app = initializeApp(FIREBASE_CONFIG);
  getAnalytics(app);
}

/** Firebase Analytics object */
export const FIREBASE_ANALYTICS = getAnalytics();
