import LinkButton from '../atom/LinkButton';
import NavBarContainer from '../atom/NavBarContainer';

function NavBar() {
  return (
    <NavBarContainer>
      <LinkButton to="/" />
      <LinkButton to="/admin" />
    </NavBarContainer>
  );
}

export default NavBar;
