import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../../shared/layout/layout";
import http from "../../shared/services/http-service";
import UserList from "../components/UserList";
const Users = () => {
  const [users, setUsers] = useState();
  const fetchUsers = async () => {
    const { data } = await http.get("/users");
    setUsers(data.users);
  };
  console.log(users);
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      {users && <UserList items={users} />}
    </Layout>
  );
};

export default Users;
