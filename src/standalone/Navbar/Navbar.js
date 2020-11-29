import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.scss';

function Navbar() {
  const location = useLocation();
  const isOnVotePage = location.pathname === '/vote';

  return (
    <nav className="navbar">
      <div className="nav-items nav-items-left">
        <Link className="home-link" to="/">
          <h1>catmash 🐈</h1>
        </Link>
      </div>
      <div className="nav-items nav-items-right">
        {!isOnVotePage && (
          <Link className="vote-link" to="/vote">
            <h1>
              start voting <span>✋</span>
            </h1>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
