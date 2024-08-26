import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CertificationDetails = () => {
  let { id } = useParams();
  const [aux, setAux] = useState(null);

  useEffect(() => {
    // Fetch data from the public directory
    fetch('/data_certifications.json')
      .then((response) => response.json())
      .then((jsonData) => {
        // Find the certification with the matching ID
        const result = jsonData.find(item => item.id === parseInt(id));
        setAux(result);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  if (!aux) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2><center>{aux.name}</center></h2>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-4 offset-md-3">
          <b>Author:</b> {aux.tuthor} <br /> <br />
          <b>Link: </b> <a href={aux.link} target='_blank' rel='noopener noreferrer'>Click here</a> <br /> <br />
          <b>Certificate:</b> <a href={aux.certificate} target='_blank' rel='noopener noreferrer'>Click here</a><br /> <br />
          <b>Why did I take it?:</b> {aux.razon} <br /> <br />
          <b>What I learned:</b> {aux.aprendi} <br /> <br />
          {aux.repo && <div><b>Repo:</b> <a href={aux.repo} target='_blank' rel='noopener noreferrer'>Click here</a></div>}
          {aux.obs && <div><b>Obs:</b> {aux.obs}</div>}
        </div>
      </div>
    </div>
  );
};

export default CertificationDetails;
