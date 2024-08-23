import React from 'react';
import { Link } from 'react-router-dom';
import './BookSidebar.css'; // Import your CSS file

const BookSidebar = () => {
  return (
    <div className="book-sidebar">
      <h2 className="book-sidebar-title">Table of Contents</h2>
      <ul className="book-sidebar-menu">
        <li><Link to="/book/introduction">Introduction</Link></li>
        <li><Link to="/book/chapter1">Chapter 1</Link></li>
        <li><Link to="/book/chapter2">Chapter 2</Link></li>
        {/* Add more sections as needed */}
      </ul>
    </div>
  );
};

export default BookSidebar;
