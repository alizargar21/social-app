import React from "react";
import { useParams } from "react-router-dom";
import PostList from "../components/PostList";
const posts = [
  {
    id: "p1",
    title: "post title",
    description: "post des",
    image: "",
    creator: "u1",
  },
  {
    id: "p2",
    title: "post title2",
    description: "post des2",
    image: "",
    creator: "u2",
  },
];
const UserPosts = () => {
    const  userId = useParams().userId
    const loadedPosts = posts.filter(post => post.creator === userId)
    return <PostList items={loadedPosts} />;
};

export default UserPosts;
