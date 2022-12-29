import React, { useCallback, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPosts from "./posts/pages/NewPosts";
import UserPosts from "./posts/pages/UserPosts";
import Layout from "./shared/layout/layout";
import { AuthContext } from "./shared/context/auth-context";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
import AllPosts from "./posts/pages/Allposts";
const App = () => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);
  useEffect(()=> {
   
  } , [userId])
  const login = useCallback((userId, token) => {
    setToken(token);
    setUserId(userId);
    localStorage.setItem(
      "userData",
      JSON.stringify({ userId: userId, token: token })
    );
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);
  useEffect(() => {

    const storedData = JSON.parse(localStorage.getItem('userData'))

    if (storedData && storedData.token) {
      login(storedData.userId, storedData.token)
    }

  }, [login])
  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts/new" element={<NewPosts />} />
        <Route path="/:userId/posts" element={<UserPosts />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/:userId/posts" element={<UserPosts />} />
        <Route path="/:uid" element={<Users />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>{routes}</Router>
    </AuthContext.Provider>
  );
};

export default App;
