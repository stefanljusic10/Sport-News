import { db } from "./db"
import { doc, updateDoc } from "firebase/firestore/lite"

export const editSelectedNews = (id, editedNews) => {
    const docRef = doc(db, "sport-news", id)

    return updateDoc(docRef, editedNews)
    // .then(() => {
    //     setReloadNews(reloadNews)
    // })
    // .catch(error => {
    //     console.log(error);
    // })
    
}