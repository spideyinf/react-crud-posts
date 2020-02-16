import React, { useState } from 'react'
import Posts from './components/Posts'
import AddPost from './components/AddPost'

function App() {
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

  const addPost = post => {
    post.id = posts.length + 1
    setPosts([...posts, post])
  }

  const deletePost = id => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <div className="App">
      <h1>React CRUD Post Pages</h1>
      <div className="d-flex justify-content-center">
        <AddPost addPost={addPost} />
        <Posts posts={posts} deletePost={deletePost} />
      </div>
    </div>
  )
}

export default App
