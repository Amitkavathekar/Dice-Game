import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from './Component/Start';
import Gameplay from './Component/Gameplay';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Start />}
      />
      <Route
        path='/gameplay'
        element={<Gameplay />}
      />
    </Routes>
  );
};

export default App;
