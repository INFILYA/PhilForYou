import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBnA2QQSP_DTOx_tZO_F-e9JKi_8J_Mf_E",
  authDomain: "phil-for-skill.firebaseapp.com",
  projectId: "phil-for-skill",
  storageBucket: "phil-for-skill.appspot.com",
  messagingSenderId: "367640334557",
  appId: "1:367640334557:web:42fad43b96fade65be0b34",
  measurementId: "G-H5TFGQ34JQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const dataBase = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
