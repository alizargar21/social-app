import React from "react";
import { Link } from "react-router-dom";
const Button = (props) => {
  if (props.href) {
    return (
      <a className={`button`} href={props.href}>
        {props.href}
      </a>
    );
  }
  if (props.to) {
    <Link to={props.to} className={`button`}>
      {props.children}
    </Link>;
  }
  return (
    <button
      className="border border-gray-500 cursor-pointer py-2 px-3"
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
