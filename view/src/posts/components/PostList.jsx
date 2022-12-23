import React from "react";
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
    <div>
      <ul>
        {props.items.map((post) => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
              creatorId={post.creator}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
