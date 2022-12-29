import React from "react";
import ImageUpload from "../../shared/components/FormElements/imageUpload";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hooks";
import Layout from "../../shared/layout/layout";
import { validatorRequire } from "../../shared/utils/validators";
import { createPost } from "../../shared/services/posts-services";
import { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import axios from "axios";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useNavigate } from "react-router-dom";

const NewPosts = () => {
  const {sendRequest } = useHttpClient()
  const navigate= useNavigate()
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
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );
  const auth = useContext(AuthContext);
  const postSubmitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value)
      formData.append("description", formState.inputs.description.value)
      formData.append("creator", auth.userId)
      formData.append("image", formState.inputs.image.value)
      await sendRequest(
        'http://localhost:5000/api/posts',
        'POST',
        formData,
        {
            Authorization: 'Bearer ' + auth.token
        }
    )
    navigate("/")

  
    } catch (err) {}
  };
  return (
    <Layout>
      <div className="h-auto min-w-[400px] border-black bg-gray-100">
        <form
          onSubmit={postSubmitHandler}
          className="flex  h-auto w-full flex-col items-center justify-center p-4"
        >
          <h2>Add Post</h2>

          <Input
            element="input"
            id="title"
            type="text"
            errorText="Enter a valid title"
            placeholder="title"
            validators={[validatorRequire()]}
            onInput={inputHandler}
            className="text-md my-3 rounded p-2"
          />
          <Input
            id="description"
            errorText="Enter a valid description"
            placeholder="description"
            validators={[validatorRequire()]}
            onInput={inputHandler}
            className="text-md my-3 rounded p-2"
          />
          <ImageUpload
            id="image"
            onInput={inputHandler}
            errorText="choose a image"
          />
          <Button
            type="submit"
            className="mt-2 cursor-pointer rounded bg-green-500 py-2 px-3 font-semibold text-white"
          >
            Add Post
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default NewPosts;
