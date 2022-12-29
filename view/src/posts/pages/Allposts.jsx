import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Layout from "../../shared/layout/layout";
import http from "../../shared/services/http-service";
import PostList from "../components/PostList";

const AllPosts = () => {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await http.get("/posts");
        console.log(response);
        setLoadedPosts(response.data.posts)
      } catch (err) {}
    };
    fetchAllPosts()
  }, []);

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center">
      
      <PostList  items={loadedPosts} />
      </section>
    </Layout>
  );
};

export default AllPosts;
