import React from "react";
import { Link } from "react-router-dom";
const UserItem = (props) => {
  return (
    <li>
      <Link to={`/${props.id}/posts`}>
        <div>
          <img src={`http://localhost:5000/${props.image}`} alt={props.name} />
        </div>
        <div>
          <p>{props.name}</p>
          <p>{props.postCount}</p>
        </div>
      </Link>
    </li>
  );
};

export default UserItem;
