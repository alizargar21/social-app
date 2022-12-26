import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../shared/layout/layout";
import { useAuth } from "../../shared/Provider/AuthProvider";
import http from "../../shared/services/http-service";
import PostList from "../components/PostList";

const UserPosts = () => {
 const [posts , setPosts]=  useState([])
   const userId =  useParams().userId
   console.log(userId)
    useEffect(()=> {
      const fetchPosts = async() => {
        try {
           const res = await http.get(`/posts/user/${userId}`)
          setPosts(res.data.userPost)
          console.log(res.data.userPost);
        } catch (err) {
          console.log(err)
        }
      }
      fetchPosts()
    }, [userId])
    return (
      <Layout >
      {posts &&   <PostList items={posts} />}
      </Layout>
    );
};

export default UserPosts;
