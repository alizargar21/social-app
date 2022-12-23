import React from "react";
import { NavLink } from "react-router-dom";
const NavLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/"}>All Users</NavLink>
        </li>
        <li>
          <NavLink to={"/u1/posts"}>My Posts</NavLink>
        </li>
        <li>
          <NavLink to={"/posts/new"}>Create Post</NavLink>
        </li>
        <li>
          <NavLink to={"/auth"}>Authentication</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
