import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Layout from "../../shared/layout/layout";

import PostList from "../components/PostList";
import { useHttpClient } from '../../shared/hooks/http-hook'

const UserPosts = () => {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const { sendRequest } = useHttpClient()

    const userId = useParams().userId

    useEffect(() => {

        const fetchPosts = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/posts/user/${userId}`
                )
                console.log(responseData.userPost)
                setLoadedPosts(responseData.userPost)
            } catch (err) {
              console.log(err);
            }
        }

        fetchPosts()
        console.log(loadedPosts);
    }, [sendRequest, userId])

  const deletePostHandler = (deletedPostId) => {
    setLoadedPosts(prevPosts => (
      prevPosts.filter((post) => post.id !== deletedPostId)
    ));
  };
  return (
    <Layout>
      {loadedPosts && (
        <PostList items={loadedPosts} onDelete={deletePostHandler} />
      )}
    </Layout>
  );
};

export default UserPosts;
