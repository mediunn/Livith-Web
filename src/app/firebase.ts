// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, setUserProperties } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-ueIi71ftAWxhwL_HH1_N07umX-Z_V9U",
  authDomain: "livith-5327b.firebaseapp.com",
  projectId: "livith-5327b",
  storageBucket: "livith-5327b.firebasestorage.app",
  messagingSenderId: "864062841722",
  appId: "1:864062841722:web:0265798e165bc8ed692cc3",
  measurementId: "G-7RTQE8ZLYW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ 로컬 개발 환경에서 DebugView 자동 활성화
if (import.meta.env.MODE === "development") {
  setUserProperties(analytics, { is_debug_mode: true });
  (window as any).gtag?.("set", "debug_mode", true);
}

export { app, analytics, logEvent };
