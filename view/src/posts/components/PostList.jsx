import React from "react";
import { useEffect } from "react";
import PostItem from "./PostItem";
const PostList = (props) => {

  if (props.items.length === 0) {
    return (
      <div>
        <h2>No post found.</h2>
      </div>
    );
  }

  return (
    <div className="bg-blue-200 flex flex-col p-12 items-center">
      <ul className="flex flex-col justify-center items-center">
        {props.items.map((post) => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
              creatorId={post.creator}
              onDelete={props.onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
