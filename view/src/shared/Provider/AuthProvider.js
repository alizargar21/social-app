import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();
const initialAuthState = {

  userInfo : {}
}
const LOCAL_STORAGE_AUTH_KEY = "USERINFO"
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuthState);
  useEffect(()=>{
  const userInfo =   JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || null
    setAuth(userInfo)
},[])
useEffect(()=> {
  const userInfo = JSON.stringify(auth)
   localStorage.setItem(LOCAL_STORAGE_AUTH_KEY , userInfo)
}, [auth])
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
export const useAuthActions = ()=> useContext(AuthContextDispatcher);
