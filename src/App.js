import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import Profile from './components/Profile/profile';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/profile/*' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
