import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';

function ToysParameters() {
  const [toyId, setToyId] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setToyId(e.target.value);
  };

  const handleButtonClick = async () => {
    const response = await fetch(`${API_BASE_URL}/api/toys/${toyId}`);
    const data = await response.json();
    navigate('/toyDetails', { state: { toyData: data } });
  };

  return (
    <div>
        <h2>Toy Seller Data</h2>
      <input
        type="text"
        value={toyId}
        onChange={handleInputChange}
        placeholder="Enter Seller ID"
      />
      <br />
      <br />
      <button onClick={handleButtonClick}>Fetch Toy Data</button>
    </div>
  );
}

export default ToysParameters;
