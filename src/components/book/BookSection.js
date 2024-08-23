import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookSidebar from './BookSidebar'; // Import the sidebar component
import Introduction from './Introduction'; // Component for Introduction
import Chapter1 from './Chapter1'; // Component for Chapter 1
import './BookSection.css'; // Import your CSS file for layout

const BookSection = () => {
  return (
    <div className="book-section">
      <BookSidebar />
      <div className="book-content">
        <Routes>
          <Route path="/book/introduction" element={<Introduction />} />
          <Route path="/book/chapter1" element={<Chapter1 />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
};

export default BookSection;
