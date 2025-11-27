import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './try/HomePage';
import ComingSoon from './pages/ComingSoon';
import LandingPage from './try/LandingPage';
import Try from './try/Try';
import HomeDisnaker from './disnaker/HomeDIsnaker';
import Lowongan from './disnaker/Lowongan';
import Pelatihan from './disnaker/Pelatihan';
import Berita from './disnaker/Blog';
import Tkwt, {
  PengertianTKWT,
  LowonganTKWT,
  HakKewajibanTKWT,
  TipsPanduanTKWT,
  RegulasiTKWT
} from './disnaker/Tkwt';
import DetailLowongan from './disnaker/DetailLowongan';
import DetailBlog from './disnaker/DetailBlog';
import DetailPeserta from './disnaker/DetailPeserta';
import Pkwt, { 
  PengertianPKWT, 
  SyaratKetentuanPKWT, 
  HakKewajibanPKWT, 
  TemplateDokumenPKWT, 
  KonsultasiPKWT 
} from './disnaker/Pkwt';
import Ngetik1 from './typing/G1';
import About from './disnaker/About';

import PkwtLogin from './pkwt/PkwtLogin';
import PkwtRegist from './pkwt/PkwtRegist';
// import DashboardOverview from './pkwt/PkwtOverview';

import DashboardLayout from './components/DashboardLayout';
import DashboardOverview from './pkwt/PkwtOverview'; 
import PkwtPage from './pkwt/PkwtPage';
import PkwttPage from './pkwt/PkwttPage';
import FormPkwtPage from './pkwt/FormPkwtPage ';
import CompanyProfilePage from './pkwt/CompanyProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pkwt/login" element={<PkwtLogin />} />
        <Route path="/pkwt/register" element={<Navigate to="/pkwt/register/data-perusahaan" replace />} />
        <Route path="/pkwt/register/:step" element={<PkwtRegist />} />
        {/* <Route path="/pkwt/dashboard/overview" element={<DashboardOverview />} /> */}

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="pkwt" element={<PkwtPage />} />
          <Route path="pkwtt" element={<PkwttPage />} />
          <Route path="form-pkwt" element={<FormPkwtPage />} />
          <Route path="profile" element={<CompanyProfilePage />} />
        </Route>


        <Route path="/" element={<HomePage />} />
        <Route path="/tes" element={<Try />} />
        <Route path="/landing-page" element={<LandingPage />} />


        <Route path="/n1" element={<Ngetik1 />} />


        <Route path="/disnaker" element={<HomeDisnaker />} />
        <Route path="/disnaker/about" element={<About />} />
        <Route path="/disnaker/lowongan" element={<Lowongan />} />
        <Route path="/disnaker/lowongan/:id" element={<DetailLowongan />} />
        <Route path="/disnaker/pelatihan" element={<Pelatihan />} />
        <Route path="/disnaker/pelatihan/:id" element={<DetailPeserta />} />
        <Route path="/disnaker/blog" element={<Berita />} />
        <Route path="/disnaker/blog/1" element={<DetailBlog />} />
        <Route path="/disnaker/tkwt" element={<Tkwt />} />
        <Route path="/disnaker/tkwt/:tab" element={<Tkwt />} />

        <Route path="/disnaker/pkwt" element={<Pkwt />} />
        <Route path="/pkwt/pkwt/:tab" element={<Pkwt />} />

        {/* Catch-all untuk halaman yang tidak ada */}
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<Navigate to="/comingsoon" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
