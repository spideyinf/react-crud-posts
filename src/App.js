import React, { useState } from 'react'
import Posts from './Posts'

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

  return (
    <div className="App">
      <h1>React CRUD Post Pages</h1>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-row align-items-center">
          <h3>Post</h3>
          <button className="btn">Post</button>
        </div>
        <Posts posts={posts} />
      </div>
    </div>
  )
}

export default App
