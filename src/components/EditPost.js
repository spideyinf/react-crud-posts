import React, { useState, useEffect } from 'react'

function EditPost({ setUpdating, currentPost, updatePost }) {
  const [post, setPost] = useState(currentPost)

  useEffect(() => {
    setPost(currentPost)
  }, [currentPost])

  const handleInputChange = e => {
    const { name, value } = e.target
    setPost({ ...post, [name]: value })
  }

  const submitForm = e => {
    e.preventDefault()
    if (!post.title || !post.content) return

    updatePost(post.id, post)
  }

  return (
    <form onSubmit={submitForm}>
      <div className="d-flex flex-column">
        <h3>Editing Post</h3>
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
        <button className="btn">Update post</button>
        <button
          onClick={() => setUpdating(false)}
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditPost
