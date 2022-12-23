import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { validatorRequire } from "../../shared/utils/validators";
const NewPosts = () => {
  return (
    <div>
      <form>
        <Input
          element="input"
          id="u1"
          title="title"
          errorText="Enter a valid title"
          placeholder = "title"
          validators={[validatorRequire()]}
        />
        <Button>Delete</Button>
      </form>
    </div>
  );
};

export default NewPosts;
