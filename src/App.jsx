import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='home'>
          <Route path=':user' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}