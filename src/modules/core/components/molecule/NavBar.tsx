import LinkButton from '../atom/LinkButton';

function NavBar() {
  return (
    <nav>
      <LinkButton to="/">home</LinkButton>
      <LinkButton to="/admin">admin</LinkButton>
    </nav>
  );
}

export default NavBar;
