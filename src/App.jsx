import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
export default function App() {
  React.useEffect(() => {
    if (localStorage.getItem('userList') === null) {
      localStorage.setItem('userList', JSON.stringify([]));
    }
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='new' element={<NewUser />} />
        <Route path='home'>
          <Route path=':user/:platform' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}