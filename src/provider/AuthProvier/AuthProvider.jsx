import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // user info
  const [user, setUser] = useState(null);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut user
  const logOutUser = () => {
    return signOut(auth);
  };

  // set user onAuthStateChange
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, []);

  //   authInfo
  const authInfo = {
    createUser,
    signInUser,
    user,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
