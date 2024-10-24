import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { useState } from "react";
import { AuthContext } from "../context";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Create User
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        return signOut(auth).then(() => result);
      }
    );
  };

  const authInfo = { loading, register };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
