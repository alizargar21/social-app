import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import { deletePost } from "../../shared/services/posts-services";
const PostItem = ({ image, description, title, creator ,id,onDelete }) => {
 const deleteHandler =async ()=> {
try {
  const res = await deletePost(`/posts/${id}`)
  onDelete(id)
  console.log(res)
} catch (err) {
  console.log(err);
}

 }
  return (
    <li>
      <div>
        <img src={`http://localhost:5000/${image}`} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{creator}</p>
      </div>
      <Button
        className="mt-2 cursor-pointer rounded bg-green-500 py-2 px-3 font-semibold text-white"
        onClick={deleteHandler}
      >
        Delete
      </Button>
    </li>
  );
};

export default PostItem;
