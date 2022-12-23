import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";
const NavLinks = () => {
  const auth = useAuth();
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/"}>All Users</NavLink>
        </li>
        {auth && (
          <li>
            <NavLink to={"/u1/posts"}>My Posts</NavLink>
          </li>
        )}
        {auth && (
          <li>
            <NavLink to={"/posts/new"}>Create Post</NavLink>
          </li>
        )}
        {!auth && (
          <li>
            <NavLink to={"/auth"}>Authentication</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavLinks;
