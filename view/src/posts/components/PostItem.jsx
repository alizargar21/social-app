import React from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";
import { deletePost } from "../../shared/services/posts-services";
const PostItem = ({ image, description, title, creator ,id,onDelete }) => {
const {token , userId} = useContext(AuthContext)
console.log(token)
const location = useLocation()

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
    <li className=" flex flex-col justify-start items-center">
      <div className="min-w-[300px] flex items-center flex-col">
        <img src={`http://localhost:5000/${image}`} className="w-[60%]  h-auto rounded" alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{creator}</p>
      </div>
     {token&& location.pathname !== "/" && location.pathname !== `/${userId}/posts` &&  <Button
        className="mt-2 cursor-pointer rounded bg-green-500 py-2 px-3 font-semibold text-white"
        onClick={deleteHandler}
      >
        Delete Post
      </Button>}
    </li>
  );
};

export default PostItem;
