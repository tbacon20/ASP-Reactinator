import React, { useState } from 'react';
import './App.css';
import Nav from '../Nav';
import MovieList from '../movie/Movies';
import Podcast from '../Podcast';
import Home from '../Home';

function App() {
  const [activePage, setActivePage] = useState('home');

  function handleNavClick(page: string, title: string, event: any) {
    event.preventDefault();
    document.title = title;
    setActivePage(page);
  }

  return (
    <div>
      <Nav activePage={activePage} handleNavClick={handleNavClick} />
      <div className="container">
        {activePage === 'home' && <Home />}
        {activePage === 'podcast' && <Podcast />}
        {activePage === 'movies' && <MovieList />}
      </div>
    </div>
  );
}

export default App;
