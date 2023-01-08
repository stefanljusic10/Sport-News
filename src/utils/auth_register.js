import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const handleRegister = (email, password, callback) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Signed in
      callback()
    })
    .catch((error) => {
      console.log('greska');
    });
};

export default handleRegister;
