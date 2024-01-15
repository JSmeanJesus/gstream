import clsx from 'clsx';
import { Suspense } from 'react';
import { Sidebar } from '../widgets/Sidebar';
import { Navbar } from '../widgets/Navbar';

function App() {
  return (
    <div className={clsx('app')}>
      <Suspense fallback="loading...">
        <Navbar />
        <div className="content-page">
          <Sidebar />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
