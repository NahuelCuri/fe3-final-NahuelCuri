import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { Route, Routes } from 'react-router-dom'
import React from 'react';

import './Components/Theme.css';
import './App.css'
import Home from "./Routes/Home";
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"

function App() {
 return(
  <>
    <Navbar></Navbar>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/favs' element={<Favs />} />
        <Route path='/dentist/:id' element={<Detail />} />
    </Routes>
    <Footer></Footer>
  </>
 );
}

export default App;
