import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add Post</Link>
    </nav>
  );
}

export default Navbar;