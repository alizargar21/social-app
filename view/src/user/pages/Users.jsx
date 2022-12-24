import React from "react";
import Layout from "../../shared/layout/layout";
import UserList from "../components/UserList";
const Users = () => {
  const users = [
    {
      id: "u1",
      name: "ali",
      image: "",
      postCount: 3,
    },
  ];
  return (
    <Layout>
      <UserList items={users} />
    </Layout>
  );
};

export default Users;
