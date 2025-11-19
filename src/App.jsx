import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './try/HomePage';
import ComingSoon from './pages/ComingSoon';
import LandingPage from './try/LandingPage';
import Try from './try/Try';
import HomeDisnaker from './try/disnaker/HomeDIsnaker';
import Lowongan from './try/disnaker/Lowongan';
import Pelatihan from './try/disnaker/Pelatihan';
import Berita from './try/disnaker/berita';
import Tkwt from './try/disnaker/Tkwt';
import DetailLowongan from './try/disnaker/DetailLowongan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tes" element={<Try />} />
        <Route path="/landing-page" element={<LandingPage />} />


        <Route path="/disnaker" element={<HomeDisnaker />} />
        <Route path="/disnaker/lowongan" element={<Lowongan />} />
        <Route path="disnaker/lowongan/detail/:id" element={<DetailLowongan />} />
        <Route path="/disnaker/pelatihan" element={<Pelatihan />} />
        <Route path="/disnaker/blog" element={<Berita />} />
        <Route path="/disnaker/tkwt" element={<Tkwt />} />

        {/* Catch-all untuk halaman yang tidak ada */}
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<Navigate to="/comingsoon" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
