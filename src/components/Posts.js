import React from 'react'

function Posts({ posts, deletePost, editingPost }) {
  return (
    <ul className="page__col page__col--right d-flex flex-column">
      <h2>Posts</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <li className="d-flex flex-column" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="d-flex ">
              <button onClick={() => editingPost(post)} className="btn">
                Edit
              </button>
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
