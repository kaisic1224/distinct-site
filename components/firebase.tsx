import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: process.env.DISTINCT_KICKS_API_KEY,
  authDomain: process.env.DISTINCT_KICKS_AUTH_DOMAIN,
  projectId: process.env.DISTINCT_KICKS_PROJECT_ID,
  storageBucket: process.env.DISTINCT_KICKS_SOTRAGE_BUCKET,
  messagingSenderId: process.env.DISTINCT_KICKS_MESSAGING_SENDER_ID,
  appId: process.env.DISTINCT_KICKS_APP_ID
});

export const auth = getAuth(app);
export default app;
