import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getDatabase } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const cosmicConfig = {
  apiKey: "AIzaSyBYOfmaC0EY3vazL_EtdikNcM-z2mpIHmg",
  authDomain: "chatroom-6b40b.firebaseapp.com",
  databaseURL: "https://chatroom-6b40b-default-rtdb.firebaseio.com/",
  projectId: "chatroom-6b40b",
  storageBucket: "chatroom-6b40b.firebasestorage.app",
  messagingSenderId: "924925282218",
  appId: "1:924925282218:web:db05bfa4e26da6323d4dd3"
};

const galaxyApp = initializeApp(cosmicConfig);
export const starDb = getDatabase(galaxyApp);