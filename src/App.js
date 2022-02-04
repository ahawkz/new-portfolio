import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
