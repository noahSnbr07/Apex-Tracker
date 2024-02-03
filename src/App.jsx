import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import Replicator from './pages/Replicator';
import Rotation from './pages/Rotation';
import Settings from './pages/Settings';
import setTheme from './utils/functions/setTheme';
export default function App() {
  React.useEffect(() => {
    if (localStorage.getItem('userList') === null) {
      localStorage.setItem('userList', JSON.stringify([]));
    }
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 0);
    }
    setTheme(0);
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='settings' element={<Settings />} />
        <Route path='replicator' element={<Replicator />} />
        <Route path='rotation' element={<Rotation />} />
        <Route path='new' element={<NewUser />} />
        <Route path='home'>
          <Route path=':user/:platform' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}