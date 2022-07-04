import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/'
import Home from './pages/Home/'
import Login from './pages/Login/'
import Profile from './pages/Profile/'
import Footer from './components/Footer/'
import { useEffect } from 'react'
import * as actions from './features/user'
import { getUser } from './services/api'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from './utils/selectors'
import { useQuery } from 'react-query'

function App() {
  const { token } = useSelector(selectUser)
  const dispatch = useDispatch()

  const { data } = useQuery(['user', token], async () => getUser(token))

  useEffect(() => {
    if (data) {
      dispatch(actions.setUser(data.body))
    }
  }, [token, data])

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
