import create from "zustand";
import { db } from "../utils/db";
import { collection, getDocs } from "firebase/firestore/lite";

const useNews = create((set) => ({
  news: [],
  setNews: async () => {
    const usersCollectionRef = collection(db, "sport-news");
    const data = await getDocs(usersCollectionRef);
    set(() => ({ news: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) }));
  }
}));

const useModal = create((set) => ({
  login: false,
  register: false,
  createAdmin: false,
  closeAll: () =>
    set(() => ({
      login: false,
      register: false,
      createAdmin: false,
    })),
  openLogin: () =>
    set(() => ({
      login: true,
      register: false,
      createAdmin: false,
    })),
  openRegister: () =>
    set(() => ({
      login: false,
      register: true,
      createAdmin: false,
    })),
  openCreateAdmin: () =>
    set(() => ({
      login: false,
      register: false,
      createAdmin: true,
    })),
}));

const useAccessToken = create((set) => ({
  accessToken: sessionStorage.getItem("accessToken"),
  setAccessToken: () => set(() => ({ accessToken: sessionStorage.getItem("accessToken") })),
  clearAccessToken: () => set(() => ({ accessToken: "" })),
}));

const useAdmin = create((set) => ({
  isAdminLogged: sessionStorage.getItem("isAdminLogged"),
  setIsAdminLogged: () => set(() => ({ isAdminLogged: sessionStorage.getItem("isAdminLogged") }))
}));

export { useNews, useModal, useAccessToken, useAdmin };
