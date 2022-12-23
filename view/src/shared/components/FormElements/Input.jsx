
import React from "react";
import { useReducer } from "react";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, value: action.value, isValid: true };
  default :return state
    }
};

const initState = {
  value: "",
  isValid: false,
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer( inputReducer , initState);

  const changeHandler = (e) => {
    dispatch({ type: "CHANGE", value: e.target.value });
  };
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        value={inputState.value}
        placeholder={props.placeholder}
        id={props.id}
        onChange={changeHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        value={inputState.value}
        onChange={changeHandler}
      />
    );
  return (
    <div className={`form-control`}>
      {element}
      {!inputState.isValid && props.errorText}
    </div>
  );
};

export default Input;
