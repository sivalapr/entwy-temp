import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PillarDetailPage } from './pages/PillarDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { ProcessPage } from './pages/ProcessPage';
import { ProcessDetailPage } from './pages/ProcessDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { CareersPage } from './pages/CareersPage';
import { StartProjectPage } from './pages/StartProjectPage';
import { Hero08Demo } from './components/ui/hero-08-demo';
import { Hero04Demo } from './components/ui/hero-04-demo';
import { Blog3Demo } from './components/ui/blog-3-demo';
import { GradientBackgroundDemo } from './components/ui/rosewood-blush-demo';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CaseStudy } from './types/sitemap';
import { ApiDevelopmentPage } from './pages/ApiDevelopmentPage';
import { McpDevelopmentPage } from './pages/McpDevelopmentPage';
import { RouteSeo } from './components/RouteSeo';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteSeo />
      <div className="entwy-app">
        <a className="site-skip-link" href="#main-content">Skip to content</a>
        {/* 64px Global Pinned Navbar */}
        <Navbar />

        {/* Dedicated Page Routes */}
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenProjectModal={() => {}} 
                  onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)} 
                />
              } 
            />
            {/* General Services Overview */}
            <Route path="/services" element={<ServicesPage />} />

            {/* Guild-Level Category Pages */}
            <Route path="/services/strategy" element={<PillarDetailPage />} />
            <Route path="/services/design" element={<PillarDetailPage />} />
            <Route path="/services/ai" element={<PillarDetailPage />} />
            <Route path="/services/technology" element={<PillarDetailPage />} />
            <Route path="/services/marketing" element={<PillarDetailPage />} />
            <Route path="/services/implementation" element={<PillarDetailPage />} />

            {/* Dedicated API Development & Integration Pages */}
            <Route path="/api-development" element={<ApiDevelopmentPage />} />
            <Route path="/services/api-development" element={<ApiDevelopmentPage />} />
            <Route path="/services/implementation/api-integration" element={<ApiDevelopmentPage />} />
            <Route path="/services/api-integration" element={<ApiDevelopmentPage />} />

            {/* Dedicated MCP (Model Context Protocol) Pages */}
            <Route path="/mcp-development-services" element={<McpDevelopmentPage />} />
            <Route path="/mcp-development" element={<McpDevelopmentPage />} />
            <Route path="/services/mcp-development" element={<McpDevelopmentPage />} />
            <Route path="/services/implementation/mcp" element={<McpDevelopmentPage />} />
            <Route path="/services/implementation/mcp-development-services" element={<McpDevelopmentPage />} />

            {/* Dedicated Individual Service Detail Pages */}
            <Route path="/services/:category/:slug" element={<ServiceDetailPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            {/* Solutions Overview & Dedicated Solution Detail Pages */}
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:id" element={<SolutionDetailPage />} />

            {/* Work & Case Studies */}
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:id" element={<CaseStudyDetailPage />} />

            {/* Process Overview & Dedicated Process Stage Pages */}
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/process/:id" element={<ProcessDetailPage />} />

            {/* Industries */}
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/:id" element={<IndustriesPage />} />

            {/* About */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/:id" element={<AboutPage />} />

            {/* Insights */}
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:category" element={<InsightsPage />} />
            <Route path="/insights/article/:id" element={<InsightsPage />} />

            {/* Careers */}
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/:section" element={<CareersPage />} />

            {/* Start a Project */}
            <Route path="/start-a-project" element={<StartProjectPage />} />
            <Route path="/start-a-project/:type" element={<StartProjectPage />} />

            {/* Hero08 Component Preview */}
            <Route path="/hero-08-demo" element={<div className="page-shell"><Hero08Demo /></div>} />

            {/* Hero04 Component Preview */}
            <Route path="/hero-04-demo" element={<div className="page-shell"><Hero04Demo /></div>} />

            {/* Blog3 Component Preview */}
            <Route path="/blog-3-demo" element={<div className="page-shell"><Blog3Demo /></div>} />

            {/* Rosewood Blush Gradient Preview */}
            <Route path="/rosewood-blush-demo" element={<div className="page-shell"><div className="container py-12"><GradientBackgroundDemo /></div></div>} />

            {/* Fallback */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenProjectModal={() => {}} 
                  onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)} 
                />
              } 
            />
          </Routes>
        </main>

        {/* 6-Column Global Footer */}
        <Footer />

        {/* Case Study Detail Modal if opened from home quick links */}
        <CaseStudyModal 
          caseStudy={selectedCaseStudy} 
          onClose={() => setSelectedCaseStudy(null)} 
          onOpenProjectModal={() => {}} 
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
