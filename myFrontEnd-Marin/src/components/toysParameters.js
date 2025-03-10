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
    if (!toyId.trim()) {
      alert("Please enter a valid seller ID.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/toys/${toyId}`);
      if (!response.ok) throw new Error("No information found for this seller.");
      
      const data = await response.json();
      navigate('/toyDetails', { state: { toyData: data } });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Toy Seller Data</h2>

      <input
        type="text"
        value={toyId}
        onChange={handleInputChange}
        placeholder="Enter Seller ID"
        style={styles.input}
      />

      <button onClick={handleButtonClick} style={styles.button}>
      Get Data
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#282c34',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    color: 'white',
  },
  title: {
    marginBottom: '15px',
    fontSize: '22px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#ff1744',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out',
  },
  buttonHover: {
    backgroundColor: '#d50000',
  }
};

export default ToysParameters;
