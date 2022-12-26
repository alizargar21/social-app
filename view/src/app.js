import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPosts from "./posts/pages/NewPosts";
import UserPosts from "./posts/pages/UserPosts";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Layout from "./shared/layout/layout";
import AuthProvider, { useAuth } from "./shared/Provider/AuthProvider";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
const App = () => {
 const auth = useAuth()
  useEffect(()=>{console.log(auth);},[auth])
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/users" element={<Users />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/posts/new" element={<NewPosts />} />
          <Route path="/:id" element={<Users />} />
          <Route path="/:userId/posts" element={<UserPosts />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
