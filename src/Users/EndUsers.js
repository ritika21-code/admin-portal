import React, { useState } from 'react';

const EndUsers = () => {
  // Dummy user data for demonstration
  const [users, setUsers] = useState([
    { id: 1, fullName: 'John Doe', email: 'john@example.com', accessLevel: 'Admin', isActive: true },
    { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', accessLevel: 'User', isActive: false },
    { id: 1, fullName: 'John Doe', email: 'john@example.com', accessLevel: 'Admin', isActive: true },
    { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', accessLevel: 'User', isActive: false },
    { id: 1, fullName: 'John Doe', email: 'john@example.com', accessLevel: 'Admin', isActive: true },
    { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', accessLevel: 'User', isActive: false },
    { id: 1, fullName: 'John Doe', email: 'john@example.com', accessLevel: 'Admin', isActive: true },
    { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', accessLevel: 'User', isActive: false },
    // Add more user data as needed
  ]);

  const handleDeleteUser = (userId) => {
    // Implement delete user functionality
    // For demo, let's just filter out the user from the state
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleDeactivateUser = (userId) => {
    // Implement deactivate user functionality
    // For demo, let's just update the isActive property of the user
    setUsers(users.map(user => user.id === userId ? { ...user, isActive: false } : user));
  };

  return (
    <div>
      <h1>Number of Users: {users.length}</h1>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Access Level</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.accessLevel}</td>
              <td>{user.isActive ? 'Yes' : 'No'}</td>
              <td>
                <select onChange={(e) => {
                  const action = e.target.value;
                  if (action === 'delete') {
                    handleDeleteUser(user.id);
                  } else if (action === 'deactivate') {
                    handleDeactivateUser(user.id);
                  }
                }}>
                  <option value="">Choose Action</option>
                  <option value="delete">Delete User</option>
                  <option value="deactivate">Deactivate User</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EndUsers;
