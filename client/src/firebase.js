import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM2QNy8JQoqGNWmKURMi6Or2r2vCLZ2-o",
  authDomain: "petcaresystem-2742a.firebaseapp.com",
  projectId: "petcaresystem-2742a",
  storageBucket: "petcaresystem-2742a.appspot.com",
  messagingSenderId: "10320473556",
  appId: "1:10320473556:web:1273990bec4a27a1f8ba41"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };