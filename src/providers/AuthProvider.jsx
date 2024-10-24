import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AuthContext } from "../context";
import auth from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Register User
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        return signOut(auth).then(() => result);
      }
    );
  };

  // Login User
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login With Google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Login With GitHub
  const gitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  // Reset Password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    register,
    login,
    googleLogin,
    gitHubLogin,
    resetPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
