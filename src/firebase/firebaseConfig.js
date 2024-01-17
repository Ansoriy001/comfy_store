import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDb5U-m77gC_85GBo8KmyBvhx4nnJ0Cwrc",
  authDomain: "comfy-store-a3e05.firebaseapp.com",
  projectId: "comfy-store-a3e05",
  storageBucket: "comfy-store-a3e05.appspot.com",
  messagingSenderId: "512863045725",
  appId: "1:512863045725:web:c3245d00f1cfd3150be5b4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
