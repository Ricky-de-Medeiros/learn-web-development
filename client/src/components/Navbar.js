import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <Link to="/">Home</Link>
        <Link to="/tutorials">Tutorials</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/about">About</Link>
        {/* Add other navigation links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
