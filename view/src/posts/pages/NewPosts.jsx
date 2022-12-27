import React from "react";
import ImageUpload from "../../shared/components/FormElements/imageUpload"
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hooks";
import Layout from "../../shared/layout/layout";
import { validatorRequire } from "../../shared/utils/validators";
import { createPost } from "../../shared/services/posts-services";
import { useAuth } from "../../shared/Provider/AuthProvider";

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
      image : {
        value : null,
        isValid : false
      }
    },
    false
  );
 const auth =    useAuth()
 console.log(auth);
  const postSubmitHandler = async (e) => {
    e.preventDefault();
    const formData =  new FormData()
    formData.append('title', formState.inputs.title.value)
    formData.append('description', formState.inputs.description.value)
    formData.append('creator', auth.userInfo.id)
    formData.append('image', formState.inputs.image.value)

    try {
    const {data} =  await createPost(formData);
    console.log(data)
    } catch (err) {
      console.log(err);
    }
    
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
          <ImageUpload id="image" onInput={inputHandler} errorText="choose a image"/>
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
