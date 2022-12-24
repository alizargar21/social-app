import React from "react";
import { Link } from "react-router-dom";
const Button = (props) => {
  if (props.href) {
    return (
      <a className={props.className} href={props.href}>
        {props.href}
      </a>
    );
  }
  if (props.to) {
    <Link to={props.to} className={props.className}>
      {props.children}
    </Link>;
  }
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
