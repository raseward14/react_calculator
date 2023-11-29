import Layout from '../src/components/Layout';
import React, { useState } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
