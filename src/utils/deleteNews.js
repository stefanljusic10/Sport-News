import { db } from "./db"
import { doc, deleteDoc } from "firebase/firestore/lite"

export const deleteNews = async (id) => {
    const userDoc = doc(db, 'sport-news', id)
    await deleteDoc(userDoc)
}