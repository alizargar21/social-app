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
    <button className={`button`} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
