import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Certifications() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
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
    setFilter({ name: '', category: '' });
    setFilteredData(data);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h2 className="my-4"><font color='#2874a6'><center>Certifications</center></font></h2>
      <hr />
      <br />
      
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
        {currentItems.map((item, index) => {
          // Dynamically require the image
          const imagePath = (() => {
            try {
              return require(`../../images/${item.image}`);
            } catch (error) {
              console.error('Image not found:', item.image);
              return require(`../../images/default.jpg`); // Fallback image
            }
          })();

          return (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3">
              <div 
                className="card mb-4" 
                onClick={() => navigate(`/certifications/${item.id}`)} 
                style={{ height: '80%', overflow: 'hidden' }}
              >
                <div className="card-body d-flex flex-column justify-content-between">
                  
                  <h5 className="card-title text-center">
                    {item.name}
                  </h5>
                  
                  <center>
                    <img 
                      src={imagePath} 
                      className="card-img-top img-fluid" 
                      alt={item.title}
                      style={{ width: '200px', height: '150px', objectFit: 'cover' }} 
                    /> 
                  </center>
                </div>
              </div>
            </div>
          );
        })}
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

export default Certifications;
