import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/'
import Home from './pages/Home/'
import Login from './pages/Login/'
import Profile from './pages/Profile/'
import Footer from './components/Footer/'

function App() {
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
