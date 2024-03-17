import React, { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import swal from "sweetalert";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
};

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}


  const logOut = () => {
    setLoading(true);
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to leave this page?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
              swal("Sadly!", "You have been logged out!", "success");
              return signOut(auth);
            }
          });

  }

      // Go to Top of window

      const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,createUser, signIn, logOut, updateUser, signInWithGoogle
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
