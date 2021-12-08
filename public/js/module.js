import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyC7Iry2wCjuSzsuiWGX93umKzhtDnHK-io",
    authDomain: "kmarketcatalog.firebaseapp.com",
    projectId: "kmarketcatalog",
    storageBucket: "kmarketcatalog.appspot.com",
    messagingSenderId: "30587738172",
    appId: "1:30587738172:web:047e1bdd958c8dd4e24b39",
    measurementId: "${config.measurementId}"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);