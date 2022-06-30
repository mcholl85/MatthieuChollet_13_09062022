import { Link } from 'react-router-dom'

export default function SigninButton() {
  return (
    <div>
      <Link className='main-nav-item' to='/login'>
        <i className='fa fa-user-circle'></i> Sign In
      </Link>
    </div>
  )
}
