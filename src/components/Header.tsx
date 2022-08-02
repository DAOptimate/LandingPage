import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

function Header() {
  return (
    <header className="bg-pink-100">
      <div className="max-w-6xl m-auto p-4 flex justify-between items-center">
        <h1 className="text-neutral-600 font-bold text-2xl">DAOptimate</h1>
        <nav>
          <Link to="/" className="px-4 text-neutral-600 hover:text-neutral-800">home</Link>
          <Link to="/admin" className="px-4 text-neutral-600 hover:text-neutral-800">admin</Link>
        </nav>
        <LoginButton />
      </div>
    </header>
  );
}

export default Header;
