import React, { useState } from 'react'

function AddPost({ addPost }) {
  const initialState = { id: null, title: '', content: '' }
  const [post, setPost] = useState(initialState)

  const handleInputChange = e => {
    const { name, value } = e.target
    setPost({ ...post, [name]: value })
  }

  const submitForm = e => {
    e.preventDefault()
    if (!post.title || !post.content) return

    addPost(post)
    setPost(initialState)
  }

  return (
    <form onSubmit={submitForm}>
      <div className="d-flex flex-column">
        <h3>Add Post</h3>
        <label>Post title</label>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleInputChange}
        />
        <label>Post content</label>
        <input
          type="textarea"
          name="content"
          value={post.content}
          onChange={handleInputChange}
        />
        <button className="btn">Post</button>
      </div>
    </form>
  )
}

export default AddPost
