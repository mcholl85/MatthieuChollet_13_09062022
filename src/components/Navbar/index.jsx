import Logo from '../Logo/index.jsx';
import SigninButton from '../SigninButton/index.jsx';

export default function Navbar() {
  return (
    <nav className="main-nav">
      <Logo />
      <SigninButton />
    </nav>
  );
}
