import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../utils/db";

const handleLogin = (
  email,
  password,
  navigate,
  closeAllModals,
  setAccessToken,
  setIsAdminLogged,
  setLoginMessage
) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password).then((res) => {
    // Signed in
    sessionStorage.setItem("accessToken", res._tokenResponse.idToken);
    setLoginMessage("");
    closeAllModals();
    setAccessToken();

    const usersCollectionRef = collection(db, "users");
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      // check if is logged as admin
      let flag = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].access === "admin") {
          sessionStorage.setItem('isAdminLogged', true)
          setIsAdminLogged()
          navigate("/admin");
          flag = true;
          break;
        }
      }
      !flag && navigate("/");
    };
    getUsers();
  })
  .catch((error) => {
    setLoginMessage("Wrong email or password!");
    console.log(error);
  });
};

export default handleLogin;
