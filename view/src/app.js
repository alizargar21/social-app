import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPosts from "./posts/pages/NewPosts";
import UserPosts from "./posts/pages/UserPosts";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import AuthProvider from "./shared/Provider/AuthProvider";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Users />} />
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
