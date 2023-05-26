import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from '../components/layouts/AppLayout/AppLayout';
import React from 'react';
import Home from '../components/pages/Home/Home';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={'/'} element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
