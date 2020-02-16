import React from 'react'

function Posts({ posts, deletePost }) {
  return (
    <ul className="w-50 d-flex flex-column">
      <h3>Posts</h3>
      {posts.length > 0 ? (
        posts.map(post => (
          <li className="d-flex flex-column" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="d-flex ">
              <button className="btn">Edit</button>
              <button
                onClick={() => deletePost(post.id)}
                className="btn btn--warning"
              >
                Delete
              </button>
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
