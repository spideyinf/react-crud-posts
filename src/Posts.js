import React from 'react'

function Posts({ posts }) {
  return (
    <ul className="w-50 d-flex flex-column">
      {posts.length > 0 ? (
        posts.map(post => (
          <li className="d-flex flex-column" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="d-flex">
              <button className="btn">Edit</button>
              <button className="btn btn--warning">Delete</button>
            </div>
          </li>
        ))
      ) : (
        <p>Let's create some posts</p>
      )}
    </ul>
  )
}

export default Posts
