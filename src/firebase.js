import firebase from 'firebase'
import 'firebase/firestore'
firebase.initializeApp({
    apiKey: "AIzaSyDpwZnkzHXw14fUGbN0L8ucMbNQllVbY-A",
    authDomain: "instagram-project-enhee.firebaseapp.com",
    projectId: "instagram-project-enhee",
    storageBucket: "instagram-project-enhee.appspot.com",
    messagingSenderId: "1053787545381",
    appId: "1:1053787545381:web:c5c55632eb74ff411304cc",
    measurementId: "G-ZGL3VHE8J1"
});
let db = firebase.firestore()
let storage = firebase.storage()
let auth=firebase.auth()
export {
    firebase, db, storage,auth
}
export const createDoc=(path,data)=>{
    firebase.firestore().doc(path).set({
        createdAt: firebase.firestore.FieldValue.serverTimestamp() || null,
        ...data
    })
}