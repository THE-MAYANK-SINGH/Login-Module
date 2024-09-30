// src/firebaseConfig.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5cbpy90cEtm6hHH5At5rqwdmeDlgLgus",
  authDomain: "login-module-dc2e8.firebaseapp.comIN",
  projectId: "Ylogin-module-dc2e8_ID",
  storageBucket: "login-module-dc2e8.appspot.comT",
  messagingSenderId: "82562963148",
  appId: "1:82562963148:web:6ac2052dff5d1b7dbf1469"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
