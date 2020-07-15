import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAQgsxu7P9DTQ59vNY2SVHChlKpAediJew",
    authDomain: "messenger-clone-6c744.firebaseapp.com",
    databaseURL: "https://messenger-clone-6c744.firebaseio.com",
    projectId: "messenger-clone-6c744",
    storageBucket: "messenger-clone-6c744.appspot.com",
    messagingSenderId: "505323806463",
    appId: "1:505323806463:web:3179780ccd046d4630b6ca",
    measurementId: "G-RWP000YMVN"
})

const db = firebase.firestore()

export default db