import clsx from 'clsx';
import { Suspense, useState } from 'react';
import { Sidebar } from '../widgets/Sidebar';
import { Navbar } from '../widgets/Navbar';
import { Link, Route, Routes } from 'react-router-dom';

import { HomePageAsync } from '../pages/HomePage/HomePageAsync';
import { LoginPageAsync } from '../pages/LoginPage/LoginPageAsync';
import { SettingsPageAsync } from '../pages/SettingsPage/SettingsPageAsync';

export enum Theme {
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
}

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const toggleTheme = () => {
    console.log('12');
    setTheme((prevTheme) =>
      prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
    );
  };

  return (
    <div className={clsx('app', theme)}>
      <Suspense fallback="loading...">
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
        <Link to="settings">Settings</Link>
        <button onClick={toggleTheme}>Theme</button>
        <Routes>
          <Route path={'/'} element={<HomePageAsync />} />
          <Route path={'login'} element={<LoginPageAsync />} />
          <Route path={'settings'} element={<SettingsPageAsync />} />
        </Routes>
        <Navbar />
        <div className="content-page">
          <Sidebar />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
