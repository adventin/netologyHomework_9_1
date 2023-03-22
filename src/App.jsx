import { useState } from 'react'
import './App.css'
import { Navigate, NavLink, Router, Route, Routes, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import Menu from './components/Menu';

export default function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
}