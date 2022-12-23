import React from "react";
import Button from "../../shared/components/FormElements/Button"
import Input from "../../shared/components/FormElements/Input";
const NewPosts = () => {
  return (
    <div>
      <form action="">
        <Input element="input" id="u1" title="title" errorText="Enter a valid title"/>
        <Button>Delete</Button>
      </form>
    </div>
  );
};

export default NewPosts;
