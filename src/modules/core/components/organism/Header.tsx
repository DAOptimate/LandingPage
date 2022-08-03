import HeaderContainer from '../atom/HeaderContainer';
import Logo from '../atom/Logo';
import NavBar from '../molecule/NavBar';
import LoginButton from '../atom/LoginButton';

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <NavBar />
      <LoginButton />
    </HeaderContainer>
  );
}

export default Header;
