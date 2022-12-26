import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";
const NavLinks = () => {
  const {isLogin} = useAuth();
  return (
    <div className="w-full h-full">
      <ul className="flex justify-start items-center w-full h-full mx-5 text-lg font-semibold text-gray-300">
        <li className="mx-2">
          <NavLink to={"/"}>All Users</NavLink>
        </li>
        {isLogin && (
          <li className="mx-2">
            <NavLink to={"/u1/posts"}>My Posts</NavLink>
          </li>
        )}
        {isLogin && (
          <li className="mx-2">
            <NavLink to={"/posts/new"}>Create Post</NavLink>
          </li>
        )}
        {!isLogin && (
          <li className="mx-2">
            <NavLink to={"/auth"}>Authentication</NavLink>
          </li>
        )}
        <li className="mx-2">
            <NavLink to={"/users"}>users</NavLink>
          </li>
      </ul>
    </div>
  );
};

export default NavLinks;
