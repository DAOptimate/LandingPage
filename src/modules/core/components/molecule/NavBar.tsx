import LinkButton from '../atom/LinkButton';

function NavBar() {
  return (
    <nav className="flex flex-col pt-28">
      <LinkButton to="/">home</LinkButton>
      <LinkButton to="/admin">admin</LinkButton>
    </nav>
  );
}

export default NavBar;
