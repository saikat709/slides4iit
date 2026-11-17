import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import PresentationPage from './pages/PresentationPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage: Multi-presentation catalog & Presenter Profile */}
        <Route path="/" element={<HomePage />} />

        {/* Short typing slug for Flamebase presentation */}
        <Route path="/flamebase1" element={<PresentationPage />} />

        {/* Friendly aliases redirecting to /flamebase1 */}
        <Route path="/flamebase" element={<Navigate to="/flamebase1" replace />} />
        <Route path="/flamebase-project-proposal" element={<Navigate to="/flamebase1" replace />} />

        {/* Dynamic route for all registered and future presentations */}
        <Route path="/:slug" element={<PresentationPage />} />

        {/* Fallback to homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
