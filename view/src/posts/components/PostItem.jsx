import React from 'react'

const PostItem = ({image , description , title , id , creator}) => {
  return (
<li>
    <div>
        <img src={image} alt={title} />
    </div>
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{creator}</p>
    </div>
</li>
  )
}

export default PostItem