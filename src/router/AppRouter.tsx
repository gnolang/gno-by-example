import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from '../components/layouts/AppLayout/AppLayout';
import React from 'react';
import Home from '../components/pages/Home/Home';
import Tutorial from '../components/pages/Tutorial/Tutorial';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path={'tutorials/:sectionID/:tutorialID'} element={<Tutorial />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
