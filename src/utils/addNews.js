import { collection, addDoc } from 'firebase/firestore/lite'
import { db } from './db'

export const addNews = (news) => {
    const usersCollectionRef = collection(db, "sport-news")
    return addDoc(usersCollectionRef, news)
}