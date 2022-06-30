import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/index.jsx'
import Home from './pages/Home/index.jsx'
import Login from './pages/Login/index.jsx'
import Profile from './pages/Profile/index.jsx'
import Footer from './components/Footer/index.jsx'
import { useEffect } from 'react'
import * as actions from './features/user'
import { getUser } from './services/api'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from './utils/selectors.js'
import { useQuery } from 'react-query'

function App() {
  const { token } = useSelector(selectUser)
  const dispatch = useDispatch()

  const { data } = useQuery(['user', token], async () => getUser(token))

  useEffect(() => {
    if (data && data.status === 200) {
      dispatch(actions.setUser(data.body))
      console.log(token, data)
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
