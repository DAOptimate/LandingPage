import Logo from '../atom/Logo';
import NavBar from '../molecule/NavBar';

function Sidebar() {
  return (
    <nav className="p-4 bg-white">
      <Logo />
      <NavBar />
    </nav>
  );
}

export default Sidebar;
