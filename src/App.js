import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Service from './components/service/Service';

function App() {
  return (
    <>
     <HashRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
