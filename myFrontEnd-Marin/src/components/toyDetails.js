import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ToyDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toyData } = location.state;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>

      <h2 style={{ color: '#333' }}>{toyData.name_seller}</h2>
      <p style={{ color: '#666' }}>Total toys sold: {toyData.toys_sold}</p>

      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: '#fff' }}>
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
            <th style={{ padding: '10px' }}>Toy ID</th>
            <th style={{ padding: '10px' }}>Name</th>
            <th style={{ padding: '10px' }}>Price</th>
            <th style={{ padding: '10px' }}>Description</th>
            <th style={{ padding: '10px' }}>Purchase Date</th>
          </tr>
        </thead>
        <tbody>
          {toyData.toys.map((toy) => (
            <tr key={toy.id_toy} style={{ borderBottom: '1px solid #ddd', color: 'black' }}>
              <td style={{ padding: '10px', textAlign: 'center' }}>{toy.id_toy}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{toy.name_toy}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>${toy.price_toy}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{toy.description_toy}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{new Date(toy.data_buys).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '20px',
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Exit
      </button>
      
    </div>
  );
}

export default ToyDetails;
