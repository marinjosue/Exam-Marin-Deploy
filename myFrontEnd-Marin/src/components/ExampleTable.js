import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';

const ExampleTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/users`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Cedula</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.cedula}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExampleTable;
