import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAelmLB0_NlcB2mZyXlIv2Z4Vsl6WMsAS0",
  authDomain: "tushar-chatapp-e0058.firebaseapp.com",
  projectId: "tushar-chatapp-e0058",
  storageBucket: "tushar-chatapp-e0058.appspot.com",
  messagingSenderId: "471211586493",
  appId: "1:471211586493:web:4b18e0f59e4c51ec1718d4",
  measurementId: "G-MGP7YE9CHD",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
