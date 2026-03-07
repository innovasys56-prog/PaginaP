import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where,
  updateDoc,
  doc,
  onSnapshot,
  orderBy 
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// IMPORTANTE: Reemplaza con los datos de tu proyecto (Paso 2)
const firebaseConfig = {
    apiKey: "AIzaSyBpuWKh56n1HfqLpytVD7rXnetrhvswoHE",
    authDomain: "portal-utc.firebaseapp.com",
    projectId: "portal-utc",
    storageBucket: "portal-utc.firebasestorage.app",
    messagingSenderId: "1004079523692",
    appId: "1:1004079523692:web:77860a1be7b871a7db7549",
    measurementId: "G-V42WBP78BP"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { 
  db, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where,
  updateDoc,
  doc,
  onSnapshot,
  orderBy 
};