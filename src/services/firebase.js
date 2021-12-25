import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB77t4bgX_iLewxFzm6T1pb0nlUStYowjM",
  authDomain: "aural-records.firebaseapp.com",
  projectId: "aural-records",
  storageBucket: "aural-records.appspot.com",
  messagingSenderId: "998871466517",
  appId: "1:998871466517:web:b1a453e3506bf197c6441c",
}

const firebaseApp = initializeApp(firebaseConfig)

// export const db = getFirestore()

const auth = getAuth(firebaseApp)

export default auth
