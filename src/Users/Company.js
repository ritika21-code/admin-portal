import React, { useState } from 'react';

const CompanyPage = () => {
  const initialCompanies = [
    { id: 1, name: 'Company A', email: 'companya@example.com', users: 10 },
    { id: 2, name: 'Company B', email: 'companyb@example.com', users: 15 },
    { id: 3, name: 'Company C', email: 'companyc@example.com', users: 20 },
    { id: 1, name: 'Company A', email: 'companya@example.com', users: 10 },
    { id: 2, name: 'Company B', email: 'companyb@example.com', users: 15 },
    { id: 3, name: 'Company C', email: 'companyc@example.com', users: 20 },
    { id: 1, name: 'Company A', email: 'companya@example.com', users: 10 },
    { id: 2, name: 'Company B', email: 'companyb@example.com', users: 15 },
    { id: 3, name: 'Company C', email: 'companyc@example.com', users: 20 },
    { id: 1, name: 'Company A', email: 'companya@example.com', users: 10 },
    { id: 2, name: 'Company B', email: 'companyb@example.com', users: 15 },
    { id: 3, name: 'Company C', email: 'companyc@example.com', users: 20 }
  ];

  const [companies, setCompanies] = useState(initialCompanies);

  const handleDeleteUser = (companyId) => {
    // Implement delete user functionality
    // For demo, let's just filter out the company from the state
    setCompanies(companies.filter(company => company.id !== companyId));
  };

  const handleDeactivateUser = (companyId) => {
    // Implement deactivate user functionality
    // For demo, let's just update the isActive property of the company
    setCompanies(companies.map(company => company.id === companyId ? { ...company, isActive: false } : company));
  };

  return (
    <div>
      <h1>Number of Companies: {companies.length}</h1>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Company Email</th>
            <th>Number of Users</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.email}</td>
              <td>{company.users}</td>
              <td>
                <select onChange={(e) => {
                  const action = e.target.value;
                  if (action === 'delete') {
                    handleDeleteUser(company.id);
                  } else if (action === 'deactivate') {
                    handleDeactivateUser(company.id);
                  }
                }}>
                  <option value="">Choose Action</option>
                  <option value="delete">Delete Company</option>
                  <option value="deactivate">Deactivate Company</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyPage;
