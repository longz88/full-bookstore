// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyCaLujc5MFeQp7C2UbDSNr1gNF6hauB4mA',
   authDomain: 'mern-bookstore-e9d60.firebaseapp.com',
   projectId: 'mern-bookstore-e9d60',
   storageBucket: 'mern-bookstore-e9d60.appspot.com',
   messagingSenderId: '192716235866',
   appId: '1:192716235866:web:7815716c27603c4c14a463',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
