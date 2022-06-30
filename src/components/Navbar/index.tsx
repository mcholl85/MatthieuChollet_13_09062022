import Logo from '../Logo/'
import SigninButton from '../SigninButton/'
import SignoutButton from '../SignoutButton/'
import { useSelector } from 'react-redux'
import { selectUser } from '../../utils/selectors'

export default function Navbar() {
  const { user } = useSelector(selectUser)

  return (
    <nav className='main-nav'>
      <Logo />
      {user.id ? <SignoutButton /> : <SigninButton />}
    </nav>
  )
}
