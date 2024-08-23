import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Article from './components/articles/Article';
import ArticleDetail from './components/articles/ArticleDetail';
import Navbar from './components/common/Navbar';
import About from './components/common/About';
import Contact from './components/common/Contact';
import TutorialHome from './components/tutorials/TutorialHome';
import TutorialDetail from './components/tutorials/TutorialDetail';


import SimpleFooter from "./components/common/Footer";

// tutorial's texts
import TestDriven from './components/tutorials/tutorials/TestDriven';
import DeployMLModel from './components/tutorials/tutorials/DeployMLModel';


import BookSection from "./components/book/BookSection";



function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-fill">
          <Routes>
            <Route path="/articles" element={<Article />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tutorials/text/TDD" element={<TestDriven />} />
            <Route path="/tutorials/text/DeployMLModel" element={<DeployMLModel />} />
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

