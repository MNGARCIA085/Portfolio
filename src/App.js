import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import About from './components/common/About';
import TutorialHome from './components/tutorials/TutorialHome';
import TutorialDetail from './components/tutorials/TutorialDetail';
import SimpleFooter from "./components/common/Footer";
import Home from "./components/common/Home";
import Certifications from "./components/certifications/Certifications";
import CertificationDetails from "./components/certifications/CertificationDetail";
// tutorial's texts
import DeployMLModel from './components/tutorials/tutorials/DeployMLModel';
import DjangoTDDCI from "./components/tutorials/tutorials/DjangoTDDCI";


import BookSection from "./components/book/BookSection";


import LearningProjects from "./components/projects/LearningProjects";

import RegressionWithDeepLearning from "./components/projects/pages/RegressionDeepLearning";


function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-fill">
          <Routes>
             
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/certifications/:id" element={<CertificationDetails />} />

            <Route path="/projects/learning" element={<LearningProjects />} />

            <Route path="/projects/learning/regression" element={<RegressionWithDeepLearning />} />
            

            <Route path="/tutorials/text/DeployMLModel" element={<DeployMLModel />} />
            <Route path="/tutorials/text/DjangoTDDCI" element={<DjangoTDDCI />} />
            <Route path="/tutorials" element={<TutorialHome />} />
            <Route path="/tutorial/:id" element={<TutorialDetail />} />


            <Route path="/book/*" element={<BookSection />} />

          </Routes>
        </main>
        <SimpleFooter />
      </div>
    </Router>
  );
}

export default App;

