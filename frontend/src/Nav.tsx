import React from 'react';

function Nav(props: any) {
  const { activePage, handleNavClick } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={`nav-item ${activePage === 'home' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('home', 'Joel Hilton Fanpage', e)}
            >
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li
              className={`nav-item ${activePage === 'podcast' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('podcast', 'BaconSale Podcast', e)}
            >
              <a className="nav-link" href="/podcast">
                Podcast
              </a>
            </li>
            <li
              className={`nav-item ${activePage === '' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('movies', "Joel's Movie List", e)}
            >
              <a className="nav-link" href="/movies">
                Movies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
