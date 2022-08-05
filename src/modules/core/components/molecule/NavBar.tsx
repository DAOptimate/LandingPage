import LinkButton from '../atom/LinkButton';

function NavBar() {
  return (
    <nav>
      <LinkButton to="/">home</LinkButton>
      <LinkButton to="/admin">admin</LinkButton>
      <LinkButton to="/contact">contact</LinkButton>
    </nav>
  );
}

export default NavBar;
