import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AdminPanel from './AdminPanel';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {/*<Link to="/home">
            <button style={{ width: '100px', height: '50px', margin: '0px 10px' }}>
              Homepage
            </button>
          </Link>
          <Link to="/admin">
            <button style={{ width: '100px', height: '50px', margin: '0px 10px' }}>
              Admin Panel
            </button>
  </Link>*/}

          <Routes>
            <Route path="/home" element={<Header />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Router>
      </header>
    </div >
  );
}

export default App;
