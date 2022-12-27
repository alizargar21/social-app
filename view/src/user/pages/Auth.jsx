import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hooks";
import Layout from "../../shared/layout/layout";
import { useAuth, useAuthActions } from "../../shared/Provider/AuthProvider";
import { validatorRequire } from "../../shared/utils/validators";
import {
  loginUser,
  signupUser,
} from "../../shared/services/authentication-service";
import ImageUpload from "../../shared/components/FormElements/imageUpload";
const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const auth = useAuth();
  const setAuth = useAuthActions();

  const navigate = useNavigate();

  useEffect(() => {
    
  }, [auth]);
  const [formState, inputHandler, setFromData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const authSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    if (isLoginMode) {
      try {
        const strData = {
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        };
        const res = await loginUser(strData);
        console.log(res);
        if (res) {
          setAuth({ userInfo: res.data.user });
        }
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    } else {
      // with signup service
      try {

        const formData = new FormData()

        formData.append('name' , formState.inputs.name.value)
        formData.append('email' , formState.inputs.email.value)
        formData.append('image' , formState.inputs.image.value)
        formData.append('password' , formState.inputs.password.value)

        // const strData = {
        //   name: formState.inputs.name.value,
        //   email: formState.inputs.email.value,
        //   password: formState.inputs.password.value,
        //   image : formState.inputs.image.value
        // };
        const res = await signupUser(formData);
        if (res) {
          setAuth({ userInfo: res.data.user });
        }
        navigate("/");
      } catch (err) {
        console.log(err);
      }
      // with fetch methods =>
      // try {
      //   const response = await  fetch("http://localhost:5000/api/users/signup" , {
      //        method: "POST",
      //        headers:{
      //          'Content-Type' : 'application/json'
      //        },
      //        body: JSON.stringify({
      //          name : formState.inputs.name.value,
      //          email: formState.inputs.email.value,
      //          password : formState.inputs.password.value
      //        })
      //      })
      // const resData =  await response.json()
      // console.log(resData)
      // } catch (error) {
      //     throw new Error("faild signupppp")
      // }
    }
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
          image: {
            value: null,
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
          {!isLoginMode && <ImageUpload id="image" onInput={inputHandler} />}
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
          <Button
            type="submit"
            disabled={!formState.isValid}
            className="cursor-pointer rounded bg-green-500 py-2 px-3 font-semibold text-white"
          >
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
