import React from "react";
import { useReducer } from "react";
import { useCallback } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hooks";
import Layout from "../../shared/layout/layout";
import { validatorRequire } from "../../shared/utils/validators";

const NewPosts = () => {
  const [formState, inputHandler] = useForm(
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
    <Layout>
      <div className="min-w-[400px] h-auto bg-gray-100 border-black">
        <form onSubmit={postSubmitHandler} className="flex  w-full h-auto flex-col justify-center items-center p-4">
          <h2>Add Post</h2>
          <Input
            element="input"
            id="title"
            type="text"
            errorText="Enter a valid title"
            placeholder="title"
            validators={[validatorRequire()]}
            onInput={inputHandler}
            className="rounded p-2 text-md my-3"
          />
          <Input
            id="description"
            errorText="Enter a valid description"
            placeholder="description"
            validators={[validatorRequire()]}
            onInput={inputHandler}
            className="rounded p-2 text-md my-3"

          />
          <Button type="submit" className="rounded cursor-pointer py-2 px-3 mt-2 bg-green-500 text-white font-semibold">Add Post</Button>
        </form>
      </div>
    </Layout>
  );
};

export default NewPosts;
