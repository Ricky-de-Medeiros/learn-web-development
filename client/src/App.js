import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import TutorialsPage from './pages/TutorialsPage'; 
import About from './pages/About'; 
import Forum from './pages/Forum';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/forum" element={<Forum />} />
        {/* Define other routes */}
      </Routes>
    </Router>
  );
}

export default App;
