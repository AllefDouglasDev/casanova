import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const config = {
  apiKey: "AIzaSyBzpiJLp9gsTFkUPILOdHPzi2s0-6m_MGo",
  authDomain: "casanova-919cc.firebaseapp.com",
  databaseURL: "https://casanova-919cc.firebaseio.com",
  projectId: "casanova-919cc",
  storageBucket: "casanova-919cc.appspot.com",
  messagingSenderId: "95988796393",
  appId: "1:95988796393:web:5fa61d61cffe13fc99d978",
};

const app = initializeApp(config);

export const database = getDatabase(app)
