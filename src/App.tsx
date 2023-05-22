import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ContinentsList from './pages/ContinentsList';
import CountriesList from './pages/CountriesList';
import CountryDetails from './pages/CountryDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ContinentsList />} />
        <Route path='/countries' element={<CountriesList />} />
        <Route path='/country/:id' element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
