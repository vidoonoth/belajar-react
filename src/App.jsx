// import { useState } from 'react';
import './App.css';
import './TicTacToe.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage'; // Komponen AboutPage
import Game from './TicTacToe'; // Komponen Game
import ProductPage from './Product';
import ShoppingNotes from './ShoppingNotes';


function App() {
  return (
    <Router>
      <div>
        <nav className="Navbar">          
          <h2><Link to="/">React</Link></h2>
          <ul>
            <li><Link to="/tic-tac-toe">Tic Tac Toe</Link></li>
            <li>|</li>
            <li><Link to="/ShoppingNotes">Shopping Notes</Link></li>
            <li>|</li>
            <li><Link to="/Product">Products</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />          
          <Route path="/ShoppingNotes" element={<ShoppingNotes />} />
          <Route path="/tic-tac-toe" element={<Game />} />
          <Route path="/Product" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
