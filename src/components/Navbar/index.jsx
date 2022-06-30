import Logo from '../Logo/index.jsx'
import SigninButton from '../SigninButton/index.jsx'
import SignoutButton from '../SignoutButton/index.jsx'
import { useSelector } from 'react-redux'
import { selectUser } from '../../utils/selectors.js'

export default function Navbar() {
  const { user } = useSelector(selectUser)

  return (
    <nav className='main-nav'>
      <Logo />
      {user ? <SignoutButton /> : <SigninButton />}
    </nav>
  )
}
