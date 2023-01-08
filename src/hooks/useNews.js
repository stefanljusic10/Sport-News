import { useEffect, useState } from "react";
import { db } from "../utils/db";
import { collection, getDocs } from "firebase/firestore/lite";

const useNews = () => {
  const usersCollectionRef = collection(db, "sport-news");
  
  const [news, setNews] = useState([]);
  const [reloadNews, setReloadNews] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [reloadNews]);

  return { news, reloadNews, setReloadNews};
};

export default useNews;
