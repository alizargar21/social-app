import React from "react";
import { Link } from "react-router-dom";
const UserItem = (props) => {
  console.log(props.image);
  return (
    <li>
      <Link to={`/${props.id}/posts`}>
        <div>
          <img className="w-[200px]" src={`http://localhost:5000/${props.image}`} alt={props.name} />
        </div>
        <div>
          <p>{props.name}</p>
          <p> post Count  : {props.postCount} </p>
        </div>
      </Link>
    </li>
  );
};

export default UserItem;
