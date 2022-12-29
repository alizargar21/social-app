import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hooks";
import Layout from "../../shared/layout/layout";
import { validatorRequire } from "../../shared/utils/validators";
import {
  loginUser,
  signupUser,
} from "../../shared/services/authentication-service";
import ImageUpload from "../../shared/components/FormElements/imageUpload";
import { AuthContext } from "../../shared/context/auth-context";
const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  // useEffect(() => {
    
  // }, []);
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
  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFromData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined
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
    setIsLoginMode(prevMode => !prevMode);
  };
  const authSubmitHandler = async (e) => {
    e.preventDefault();
    if (isLoginMode) {
      try {
        const strData = {
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        };
        const response = await loginUser(strData);
        auth.login(response.data.userId , response.data.token)
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

        const response = await signupUser(formData);
      
        auth.login(response.data.userId , response.data.token)


        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
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
          <Button onClick={switchModeHandler}  className="cursor-pointer rounded bg-green-500 py-2 px-3 font-semibold text-white">
            Switch to {isLoginMode ? "Signup" : "Login"}
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Auth;
