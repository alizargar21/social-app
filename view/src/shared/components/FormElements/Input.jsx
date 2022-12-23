import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { validate } from "../../utils/validators";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
      case "BLUR": return {
        ...state , isBlurred :true
      }
    default:
      return state;
  }
};

const initState = {
  value: "",
  isValid: false,
  isBlurred : false
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, initState);
  useEffect(()=> {
    console.log(inputState);
  } , [initState])
  const changeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validators: props.validators,
    });
  };
  const blurHandler = ()=> {
    dispatch({type:"BLUR"})
  }
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        value={inputState.value}
        placeholder={props.placeholder}
        id={props.id}
        onBlur={blurHandler}
        onChange={changeHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        value={inputState.value}
        onBlur={blurHandler}
        onChange={changeHandler}
      />
    );
  return (
    <div className={`form-control`}>
      {element}
      {!inputState.isValid && 
        inputState.isBlurred &&
      props.errorText}
    </div>
  );
};

export default Input;
