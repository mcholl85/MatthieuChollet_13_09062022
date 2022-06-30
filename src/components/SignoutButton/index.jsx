import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../utils/selectors'
import * as actions from '../../features/user'

export default function SignoutButton() {
  const dispatch = useDispatch()
  const { user } = useSelector(selectUser)

  const handleSignOut = (e) => {
    e.preventDefault()
    dispatch(actions.signOut())
  }

  return (
    <div>
      <Link className='main-nav-item' to='/profile'>
        <i className='fa fa-user-circle'></i>
        {user.firstName}
      </Link>
      <Link onClick={handleSignOut} className='main-nav-item' to='/'>
        <i className='fa fa-sign-out'></i>
        Sign Out
      </Link>
    </div>
  )
}
