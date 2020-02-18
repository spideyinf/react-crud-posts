import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './Login'
import PostsPage from './PostsPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
      <Route exact path="/posts">
        <PostsPage />
      </Route>
    </BrowserRouter>
  )
}

export default App
