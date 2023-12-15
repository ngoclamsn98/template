// src/components/App.tsx
import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { NextUIProvider, Spinner } from "@nextui-org/react";

const Home = lazy(() => import('./pages/Home'));
const Translate = lazy(() => import('./pages/Translate'));
const App: React.FC = () => {

  return (
    <NextUIProvider>
        <Router>
          <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/translate' Component={Translate}/>
              </Routes>
          </Suspense>
      </Router>
    </NextUIProvider>
    
  );
};

export default App;