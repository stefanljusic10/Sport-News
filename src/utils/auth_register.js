import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const handleRegister = (email, password, closeAllModals, setLoginMessage) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Signed in
      closeAllModals()
    })
    .catch((error) => {
      setLoginMessage("Credentials already in use!")
      console.log(error.message);
    });
};

export default handleRegister;
