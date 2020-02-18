import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Posts from './components/Posts'
import AddPost from './components/AddPost'
import EditPost from './components/EditPost'

function PostsPage() {
  const initialFormState = { id: null, title: '', content: '' }

  const postsData = [
    {
      id: 1,
      title: 'Post 1',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, nihil?',
    },
    {
      id: 2,
      title: 'Post 2',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, nihil?',
    },
    {
      id: 3,
      title: 'Post 3',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, nihil?',
    },
  ]

  const [posts, setPosts] = useState(postsData)
  const [updating, setUpdating] = useState(false)
  const [currentPost, setCurrentPost] = useState(initialFormState)
  const history = useHistory()

  const addPost = post => {
    post.id = posts.length + 1
    setPosts([...posts, post])
  }

  const deletePost = id => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const editingPost = post => {
    setUpdating(true)
    setCurrentPost({ id: post.id, title: post.title, content: post.content })
  }

  const updatePost = (id, updatedPost) => {
    setUpdating(false)
    setPosts(posts.map(post => (post.id === id ? updatedPost : post)))
  }

  return (
    <div>
      <h1 className="page__title">React CRUD Post Pages</h1>
      <main className="page__container d-flex justify-content-center">
        {updating ? (
          <EditPost
            updating={updating}
            setUpdating={setUpdating}
            currentPost={currentPost}
            updatePost={updatePost}
          />
        ) : (
          <AddPost addPost={addPost} />
        )}

        <Posts
          posts={posts}
          deletePost={deletePost}
          editingPost={editingPost}
        />
      </main>
      <div className="btn-wrapper">
        <button className="btn btn--primary" onClick={() => history.push('/')}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default PostsPage
