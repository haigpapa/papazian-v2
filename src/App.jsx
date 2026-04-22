import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import WritingPage from './pages/WritingPage';

const AtlasPage = lazy(() => import('./pages/AtlasPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));

function RouteLoading() {
  return (
    <div className="page route-loading">
      <p className="section-kicker glow-text">LOADING SURFACE</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <main>
        <Suspense fallback={<RouteLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/atlas" element={<AtlasPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
