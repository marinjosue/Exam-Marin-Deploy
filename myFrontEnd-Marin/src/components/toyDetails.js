import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ToyDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toyData } = location.state;

  return (
    <div style={{ padding: '20px' }}>

      <h2>{toyData.name_seller}</h2>
      <p>Total de juguetes vendidos: {toyData.toys_sold}</p>

      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID Juguete</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Fecha de Compra</th>
          </tr>
        </thead>
        <tbody>
          {toyData.toys.map((toy) => (
            <tr key={toy.id_toy}>
              <td>{toy.id_toy}</td>
              <td>{toy.name_toy}</td>
              <td>${toy.price_toy}</td>
              <td>{toy.description_toy}</td>
              <td>{new Date(toy.data_buys).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botón para regresar */}
      <button
        onClick={() => navigate('/toysParameters')}
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
        Volver a ToysParameters
      </button>
    </div>
  );
}

export default ToyDetails;
