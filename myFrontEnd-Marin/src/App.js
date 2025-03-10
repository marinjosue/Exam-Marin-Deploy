import React from 'react';
import './App.css';
import ToysParameters from './components/toysParameters';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToyDetails from './components/toyDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="" element={<ToysParameters />} />
            <Route path="/toyDetails" element={<ToyDetails />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
