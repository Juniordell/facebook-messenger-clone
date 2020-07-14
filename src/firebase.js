import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMkJ9DTP5coqoBlobyDP2bHlWN2kIKD4g",
    authDomain: "facebook-messager-clone-886df.firebaseapp.com",
    databaseURL: "https://facebook-messager-clone-886df.firebaseio.com",
    projectId: "facebook-messager-clone-886df",
    storageBucket: "facebook-messager-clone-886df.appspot.com",
    messagingSenderId: "727868740694",
    appId: "1:727868740694:web:8da95afac633baf4f817f7",
    measurementId: "G-5BZQG6CR7T"
})

const db = firebase.firestore()

export default db