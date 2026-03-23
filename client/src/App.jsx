import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Layout from './components/Layouts.jsx';

const Breeders = lazy(() => import('./pages/Breeders.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Community = lazy(() => import('./pages/Community.jsx'));

function PlaceholderPage({ title, subtitle }) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-36 pb-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-orange-500">{title}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          {subtitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((card) => (
            <article
              key={card}
              className="rounded-xl border border-orange-500/30 bg-white/5 backdrop-blur-sm p-6 text-left"
            >
              <h2 className="text-xl font-semibold text-orange-400 mb-2">Coming Soon</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                This section is ready for your real data and features. Navigation is fully wired and mobile friendly.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

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
            <PlaceholderPage
              title="Guides"
              subtitle="Access practical guides for feeding, pond setup, disease prevention, and growth management."
            />
          </Layout>
        }
      />
    </Routes>
  );
}
