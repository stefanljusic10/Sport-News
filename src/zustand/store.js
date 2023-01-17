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
  menu: false,
  closeAll: () =>
    set(() => ({
      login: false,
      register: false,
      createAdmin: false,
      menu: false,
    })),
  openLogin: () =>
    set(() => ({
      login: true,
      register: false,
      createAdmin: false,
      menu: false,
    })),
  openRegister: () =>
    set(() => ({
      login: false,
      register: true,
      createAdmin: false,
      menu: false,
    })),
  openCreateAdmin: () =>
    set(() => ({
      login: false,
      register: false,
      createAdmin: true,
      menu: false,
    })),
  openMenu: () =>
    set(() => ({
      login: false,
      register: false,
      createAdmin: false,
      menu: true,
    })),
}));

const useAccessToken = create((set) => ({
  accessToken: sessionStorage.getItem("accessToken"),
  setAccessToken: () => set(() => ({ accessToken: sessionStorage.getItem("accessToken") })),
  clearAccessToken: () => set(() => ({ accessToken: "" })),
}));

const useAdmin = create((set) => ({
  isAdminLogged: sessionStorage.getItem("isAdminLogged"),
  loginMessage: "",
  setIsAdminLogged: () => set(() => ({ isAdminLogged: sessionStorage.getItem("isAdminLogged") })),
  setLoginMessage: (val) => set(() => ({ loginMessage: val })),
}));

const useScreenWidth = create((set) => ({
  screenWidth: window.innerWidth,
  setScreenWidth: (val) => set(() => ({ screenWidth: val })),
}));

export { useNews, useModal, useAccessToken, useAdmin, useScreenWidth };
