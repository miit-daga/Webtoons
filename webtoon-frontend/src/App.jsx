//eslint-disable-next-line
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import WebtoonList from './components/WebtoonList';
import AddWebtoonForm from './components/AddWebtoonForm';
import AddCharacterForm from './components/AddCharacterForm';
import Login from './components/Login';
import Register from './components/Register';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/characters">Characters</Link></li>
              <li><Link to="/add-webtoon">Add Webtoon</Link></li>
              <li><Link to="/add-character">Add Character</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>
        </nav>
        <main className="container">
          <Routes>
            <Route path="/" element={<WebtoonList />} />
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/add-webtoon" element={<AddWebtoonForm />} />
            <Route path="/add-character" element={<AddCharacterForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;