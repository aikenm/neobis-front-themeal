import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import IngredientsPage from './pages/IngredientsPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ingredients/:mealId" element={<IngredientsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
