import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRUwgXstdWUMq_b6SvAoqVMJpy9QQMnFU",
  authDomain: "urbanclap-ccdce.firebaseapp.com",
  projectId: "urbanclap-ccdce",
  storageBucket: "urbanclap-ccdce.appspot.com",
  messagingSenderId: "16889498187",
  appId: "1:16889498187:web:85cb5abb7d48084b411bce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;
