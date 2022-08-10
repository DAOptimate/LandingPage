import HeaderContainer from '../atom/HeaderContainer';
import Logo from '../atom/Logo';
import LoginButton from '../atom/LoginButton';

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <LoginButton />
    </HeaderContainer>
  );
}

export default Header;
