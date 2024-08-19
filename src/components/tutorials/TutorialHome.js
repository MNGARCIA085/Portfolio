import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filter, setFilter] = useState({ title: '', topic: '' });
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
    if (filter.topic) {
      filtered = filtered.filter(item =>
        item.topic.toLowerCase().includes(filter.topic.toLowerCase())
      );
    }
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="my-4">Tutorials</h1>


      
      {/* Filter Form */}
      <div className="mb-4">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Filter by title"
              value={filter.title}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="topic"
              className="form-control"
              placeholder="Filter by topic"
              value={filter.topic}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary" onClick={applyFilters}>
              Apply Filters
            </button>
          </div>
        </div>
      </div>
      
      {/* Card Rendering */}
      <div className="row">
        {currentItems.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4" onClick={() => navigate(`/tutorial/${index}`)}>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <h3 className="card-subtitle mb-2 text-muted">{item.topic}</h3>
                <p className="card-text">{item.text.substring(0, 100)}...</p>


                <img src={item.image} className="card-img-top" alt={item.title} />

                

                <Link to={`/${item.text}/${index}`} className="btn btn-primary">
                  Read More
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
