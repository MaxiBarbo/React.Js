
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeYYdDiisEuoFEQ2BKgQKunMvhsAhye2c",
  authDomain: "app-beer-67b91.firebaseapp.com",
  projectId: "app-beer-67b91",
  storageBucket: "app-beer-67b91.appspot.com",
  messagingSenderId: "910216203656",
  appId: "1:910216203656:web:33cf4097c2e48430677e3d",
  measurementId: "G-QPHKPW3998"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}
