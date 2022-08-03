import HeaderContainer from '../atom/HeaderContainer';
import Logo from '../atom/Logo';
import NavBar from '../molecule/NavBar';

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <NavBar />
    </HeaderContainer>
  );
}

export default Header;
