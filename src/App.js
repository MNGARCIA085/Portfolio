import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
///import Home from './Home';
//import ArticleDetail from './ArticleDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ArticleDetail from './components/ArticleDetail';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import TutorialHome from './components/tutorials/TutorialHome';
import TutorialDetail from './components/tutorials/TutorialDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutorials" element={<TutorialHome />} />
          <Route path="/tutorial/:id" element={<TutorialDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

