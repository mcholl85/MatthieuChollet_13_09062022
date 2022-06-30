import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import * as actions from '../../features/user'
import { signin } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../utils/selectors'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { token } = useSelector(selectUser)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signin(username, password).then(({ data }) => dispatch(actions.signIn(data.body)))
  }

  return token ? (
    <Navigate to='/' />
  ) : (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type='text'
              id='username'
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
              id='password'
            />
          </div>
          <div className='input-remember'>
            <input type='checkbox' id='remember-me' />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          <button type='submit' className='sign-in-button'>
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}
