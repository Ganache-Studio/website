'use client';

import { Header } from './header';
import { Navigation } from './navigation';

export const DesktopLayout: React.FC = () => {
  return (
    <>
      <div className="fixed z-10 p-4">
        <Header />
      </div>
      <Navigation />
    </>
  );
};
