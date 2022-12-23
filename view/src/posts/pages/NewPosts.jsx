import React from "react";
import { useReducer } from "react";
import { useCallback } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hooks";
import { validatorRequire } from "../../shared/utils/validators";

const NewPosts = () => {
  const [formState , inputHandler]= useForm(
    {
        title: {
          value: "",
          isValid: false,
        },
        description: {
          value: "",
          isValid: false,
        },
    },
    false
  );
 

  const postSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <div>
      <form onSubmit={postSubmitHandler}>
        <Input
          element="input"
          id="title"
          type="text"
          errorText="Enter a valid title"
          placeholder="title"
          validators={[validatorRequire()]}
          onInput={inputHandler}
        />
        <Input
          id="description"
          errorText="Enter a valid description"
          placeholder="description"
          validators={[validatorRequire()]}
          onInput={inputHandler}
        />
        <Button type="submit">Add Post</Button>
      </form>
    </div>
  );
};

export default NewPosts;
