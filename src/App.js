import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/otherComponets/Header';
import Footer from './components/otherComponets/Footer';
import Homepage from './components/otherComponets/Homepage';
import Fornx from './components/vehicles/fronx/Fornx';
import Jimny from './components/vehicles/jimny/Jimny';
import GrandVitara from './components/vehicles/grandVitara/GrandVitara';
import XL6 from './components/vehicles/xl6/XL6';
import Ciaz from './components/vehicles/ciaz/Ciaz';
import Baleno from './components/vehicles/baleno/Baleno';
import Ignis from './components/vehicles/ignis/Ignis';


import './App.css';

const App = () => {
  return (
    <div div className=' h-screen bg-slate-800'>
      <div className=' '>
        <Header />
      </div>
      
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/maruti-fronx-price-in-hyderabad' element={<Fornx />} />
        <Route path='/maruti-jimny-price-in-hyderabad' element={<Jimny />} />
        <Route
          path='/grand-vitara-on-road-price-in-hyderabad'
          element={<GrandVitara />}
        />
        <Route path='/nexa-xl6-on-road-price-in-hyderabad' element={<XL6 />} />
        <Route
          path='/nexa-ciaz-on-road-price-in-hyderabad'
          element={<Ciaz />}
        />
        <Route
          path='/new-maruti-baleno-price-in-hyderabad'
          element={<Baleno />}
        />
        <Route
          path='/nexa-ignis-on-road-price-in-hyderabad'
          element={<Ignis />}
        />
        <Route exact path='/*' element={<div>No page found </div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
