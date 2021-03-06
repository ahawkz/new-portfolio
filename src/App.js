import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/about" element={<About/>}  />
          <Route path="/contact" element={<Contact/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
