import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPosts from "./posts/pages/NewPosts";
import Users from "./user/pages/Users";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/posts" element={<NewPosts />} />
      </Routes>
    </Router>
  );
};

export default App;
