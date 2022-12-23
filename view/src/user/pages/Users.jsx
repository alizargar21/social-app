import React from 'react'
import UserList from '../components/UserList'
const Users = () => {
  const users = [{
    id:"u1",
    name : "ali",
    image : "",
    postCount : 3
  }]
  return (
    <UserList items={users}/>
  )
}

export default Users