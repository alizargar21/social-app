import React from 'react'
import UserItem from "./UserItem"
const UserList = (props) => {
 if (props.items.length === 0){
  return (
    <div>
      <h2>User not found</h2>
    </div>
  )
 }
 return(
<div>
  <ul>
    {
      props.items.map(user => {
        return <UserItem 
        key={user.id}
        id={user.id}
        image={user.image}
        name={user.name}
        postCount={user.postCount}
        />
      })
    }
  </ul>
</div>
 )
}

export default UserList