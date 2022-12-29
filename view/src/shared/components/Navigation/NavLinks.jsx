import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
const NavLinks = () => { 
  const {isLoggedIn , logout , userId} =   useContext(AuthContext)
  return (
    <div className="w-full h-full">
      <ul className="flex justify-start items-center w-full h-full mx-5 text-lg font-semibold text-gray-300">
        <li className="mx-2">
          <NavLink to={"/"}>Time Line</NavLink>
        </li>
        {isLoggedIn && (
          <li className="mx-2">
            <NavLink to={`/${userId}/posts`}>My Posts</NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li className="mx-2">
            <NavLink to={"/posts/new"}>Create Post</NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li className="mx-2">
            <NavLink to={"/auth"}>Authentication</NavLink>
          </li>
        )}
        <li className="mx-2">
            <NavLink to={"/users"}>users</NavLink>
          </li>
       {isLoggedIn &&  <li className="mx-2">
            <button onClick={logout}>Logout</button>
          </li>}
      </ul>
    </div>
  );
};

export default NavLinks;
