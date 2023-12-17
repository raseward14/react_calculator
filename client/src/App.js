import Layout from '../src/components/Layout';
import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
