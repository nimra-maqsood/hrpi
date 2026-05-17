
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Organs from './pages/Organs';
import Projects from './pages/Projects';
import Team from './pages/Team';
import News from './pages/News';
import ReportIssue from './pages/ReportIssue';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'organs': return <Organs />;
      case 'projects': return <Projects />;
      case 'team': return <Team />;
      case 'news': return <News />;
      case 'report-issue': return <ReportIssue />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-sky-200 selection:text-sky-900">
      <Header currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
