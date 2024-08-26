import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Article() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filter, setFilter] = useState({ name: '', category: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data_certifications.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setFilteredData(jsonData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const applyFilters = () => {
    let filtered = data;
    if (filter.name) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(filter.name.toLowerCase())
      );
    }
    if (filter.category) {
      filtered = filtered.filter(item =>
        item.category.toLowerCase().includes(filter.category.toLowerCase())
      );
    }
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilter({ title: '', category: '' });
    setFilteredData(data);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="my-4">Certifications</h1>
      
      {/* Filter Form */}
      <div className="mb-4">
        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Filter by name"
              value={filter.name}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-3">
            <select
              name="category"
              className="form-control"
              value={filter.category}
              onChange={handleFilterChange}
            >
              <option value="">Select Category</option>
              <option value="Software Development">Software Development</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary" onClick={applyFilters}>
              Apply Filters
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-secondary" onClick={resetFilters}>
              Reset Filters
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Card Rendering */}
      <div className="row">
        {currentItems.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4" onClick={() => navigate(`/certifications/${item.id}`)}>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                
                <img src={item.image} className="card-img-top" alt={item.title} />

              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => (
            <li key={i} className="page-item">
              <button className="page-link" onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Article;
