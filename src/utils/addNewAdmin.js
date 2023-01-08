import { collection, addDoc } from 'firebase/firestore/lite'
import { db } from './db'

export const addNewAdmin = (email, access) => {
    const usersCollectionRef = collection(db, "users")
    return addDoc(usersCollectionRef, { email, access })
}