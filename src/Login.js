import React, { useState } from 'react'

function Login({ login }) {
  const ADMIN = { user: 'admin', password: 'admin' }
  const [user, setUser] = useState({})
  const [error, setError] = useState('')

  const handleInputChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const submitForm = e => {
    e.preventDefault()
    if (user !== ADMIN) {
      setError('Invalid user')
    }

    login(login)
  }

  return (
    <div>
      <h1 className="page__title">Welcome to React CRUD Post pages</h1>
      <main className="page__container d-flex justify-content-center">
        <form className="" onSubmit={submitForm}>
          <div className="d-flex flex-column">
            <h2>Login</h2>
            <label>Username</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
            <label>Post content</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
            <span>{error}</span>
            <button className="btn">Login</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Login
