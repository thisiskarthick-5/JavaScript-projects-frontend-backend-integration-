import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhObyPC0PKw-RmUuq3sbNCiWKwxI_C1uQ",
  authDomain: "login-e3382.firebaseapp.com",
  projectId: "login-e3382",
  storageBucket: "login-e3382.firebasestorage.app",
  messagingSenderId: "558251351695",
  appId: "1:558251351695:web:36edcff140d289d38c5afa",
  measurementId: "G-5YQZX73QDX"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);