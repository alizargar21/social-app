import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();
const initialAuthState = {
  isLogin : false,
  user : {}
}
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuthState);

  return (
    <AuthContext.Provider value={auth}>
      <AuthContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = ()=> useContext(AuthContext);
export const useAuthDispatcher = ()=> useContext(AuthContextDispatcher);
