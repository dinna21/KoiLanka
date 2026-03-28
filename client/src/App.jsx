import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import GuidesPage from './pages/GuidesPage';
import Layout from './components/Layouts.jsx';

const Breeders = lazy(() => import('./pages/Breeders.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Community = lazy(() => import('./pages/Community.jsx'));

function RouteLoading({ label }) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-36 pb-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{label}</h2>
        <p className="text-gray-300">Preparing your experience...</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/shop"
        element={
          <Layout>
            <Shop />
          </Layout>
        }
      />
      <Route
        path="/breeders"
        element={
          <Layout>
            <Suspense fallback={<RouteLoading label="Loading Breeders" />}>
              <Breeders />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/services"
        element={
          <Layout>
            <Suspense fallback={<RouteLoading label="Loading Services" />}>
              <Services />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/community"
        element={
          <Layout>
            <Suspense fallback={<RouteLoading label="Loading Community" />}>
              <Community />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/guides"
        element={
          <Layout>
            <GuidesPage />
          </Layout>
        }
      />
    </Routes>
  );
}
