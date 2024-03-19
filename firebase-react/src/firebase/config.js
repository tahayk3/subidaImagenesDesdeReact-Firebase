import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyAH-fddI8KoGFfkicM8VTTNryc-f5j-dHI",
  authDomain: "react-firebase-tutorial-6dcec.firebaseapp.com",
  projectId: "react-firebase-tutorial-6dcec",
  storageBucket: "react-firebase-tutorial-6dcec.appspot.com",
  messagingSenderId: "349319972903",
  appId: "1:349319972903:web:ad89273e5ef768d8bae602"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file){
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}