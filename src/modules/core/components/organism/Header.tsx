import HeaderContainer from '../atom/HeaderContainer';
import SiteTitle from '../atom/SiteTitle';
import LoginButton from '../atom/LoginButton';

function Header() {
  return (
    <HeaderContainer>
      <SiteTitle />
      <LoginButton />
    </HeaderContainer>
  );
}

export default Header;
