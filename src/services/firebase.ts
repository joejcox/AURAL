import { initializeApp } from "firebase/app"
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore"
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

export const db = getFirestore()

const auth = getAuth(firebaseApp)

export const addUserToFirestore = async (
  uid: string,
  name: string,
  email: string
) => {
  try {
    await setDoc(doc(db, "users", uid), {
      uid: uid,
      name: name.trim(),
      email: email.trim(),
    })
    return "User successfully added to firestore"
  } catch (error) {
    return error.code
  }
}

export const getUserFromFirestore = async (uid: string) => {
  const docRef = doc(db, "users", uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  }

  throw new Error("User does not exist in Firestore")
}

export default auth
