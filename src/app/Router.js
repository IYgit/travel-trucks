import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import CamperDetail from '../pages/CamperDetail';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CamperDetail />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
