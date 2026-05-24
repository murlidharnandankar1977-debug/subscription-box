import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        SubBox
      </h1>

      <ul className="flex gap-6 text-lg">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/plans">Plans</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/admin">Admin</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;