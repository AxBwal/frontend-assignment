import Link from 'next/link';
import { removeToken, getUserFromToken } from '../utils/auth';

const Navbar = () => {
  const user = getUserFromToken();

  return (
    <nav>
      <Link href="/">Home</Link>
      {!user ? (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </>
      ) : (
        <button onClick={() => { removeToken(); location.reload(); }}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar;
