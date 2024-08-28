import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filter, setFilter] = useState({ title: '', category: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data_tutorials.json')
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
    if (filter.title) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(filter.title.toLowerCase())
      );
    }
    if (filter.category) {
      filtered = filtered.filter(item =>
        item.category.toLowerCase() === filter.category.toLowerCase()
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
      

      <h2 className="my-4"><font color='#2874a6'><center>Articles & Tutorials</center></font></h2>
      <hr />
      <br />

      {/* Filter Form */}
      <div className="mb-4">
        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Filter by title"
              value={filter.title}
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
              <option value="">Filter by category</option>
              <option value="Tutorial">Tutorial</option>
              <option value="Article">Article</option>
            </select>
          </div>
          <div className="col-md-3">
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
            <div 
              className="card mb-4" 
              onClick={() => navigate(`text/${item.link}`)}
              style={{ 
                height: '200px',  // Fixed height for all cards
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between' 
              }}
            >
              <div className="card-body" style={{ overflow: 'hidden' }}>
                <h3 className="card-title" style={{ fontSize: '1.25rem', height: '50px' }}>
                  <center><font color='#2e86c1'>{item.title}</font></center>
                </h3>

                {/* Rendering tags */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                  {item.tags.map((tag, tagIndex) => (
                    <div 
                      key={tagIndex} 
                      style={{
                        padding: '5px 10px',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '0.875rem',
                      }}
                    >
                      {tag.name}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <Link 
                  to={`text/${item.link}`} 
                  className="btn btn-info"
                  onClick={(e) => e.stopPropagation()}
                >
                  <font color='white'>Read More</font>
                </Link>
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

export default Home;
