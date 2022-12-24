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
    case "BLUR":
      return {
        ...state,
        isBlurred: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isBlurred: false
  });
  const { id, onInput } = props;
  const { value, isValid } = inputState;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);
  const changeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validators: props.validators,
    });
  };
  const blurHandler = () => {
    dispatch({ type: "BLUR" });
  };
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        value={inputState.value}
        placeholder={props.placeholder}
        onBlur={blurHandler}
        onChange={changeHandler}
        className={props.className}
      />
    ) : (
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        rows={props.rows || 3}
        value={inputState.value}
        onBlur={blurHandler}
        onChange={changeHandler}
        className={props.className}

      />
    );
  return (
    <div className="min-w-[200px] text-center">
      {element}
      {!inputState.isValid && inputState.isBlurred && <p className="text-red-500">{props.errorText}</p>}
    </div>
  );
};

export default Input;
