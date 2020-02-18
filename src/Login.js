import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Login() {
  const ADMIN = { name: 'admin', password: 'admin' }
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const history = useHistory()

  const handleInputChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    setError('')
  }

  const submitForm = e => {
    e.preventDefault()
    if (JSON.stringify(user) === JSON.stringify(ADMIN)) {
      history.push('/posts')
    }
    setError('Invalid user')
  }

  return (
    <div>
      <h1 className="page__title">Welcome to React CRUD Post pages</h1>
      <main className="page__container d-flex justify-content-center">
        <form class="w-25 page__col" onSubmit={submitForm}>
          <div className="d-flex flex-column">
            <h2>Login</h2>
            <label>Username</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
            <span class="error">{error}</span>
            <div className="btn-wrapper">
              <button className="btn btn--primary">Login</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Login
