import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hooks";
import Layout from "../../shared/layout/layout";
import { useAuth, useAuthDispatcher } from "../../shared/Provider/AuthProvider";
import { validatorRequire } from "../../shared/utils/validators";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const auth = useAuth();
  const setAuth = useAuthDispatcher();
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  const [formState, inputHandler, setFromData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: "",
      },
    },
    false
  );
  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    setAuth(true);
  };
  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFromData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFromData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };
  return (
    <Layout>

    <div>
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
          id="name"
          type="text"
          element="input"
          placeholder="Name"
            validators={[validatorRequire()]}
            errorText="enter a Valid Name"
            onInput={inputHandler}
            />
            )}
        <Input
          id="email"
          type="email"
          element="input"
          placeholder="Email"
          errorText="Enter a valid Email"
          validators={[validatorRequire()]}
          onInput={inputHandler}
          />
        <Input
          id="password"
          type="password"
          element="input"
          placeholder="Password"
          errorText="Enter a valid Password"
          validators={[validatorRequire()]}
          onInput={inputHandler}
          />
        <Button type="submit" disabled={!formState.isValid} className="rounded cursor-pointer py-2 px-3 bg-green-500 text-white font-semibold">
          {isLoginMode ? "Login" : "Signup"}
        </Button>
        <Button onClick={switchModeHandler} disabled={!formState.isValid}>
          Switch to {isLoginMode ? "Signup" : "Login"}
        </Button>
      </form>
    </div>
          </Layout>
  );
};

export default Auth;
