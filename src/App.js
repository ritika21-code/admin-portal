import CompanyPage from "./Users/Company";
import EndUsers from "./Users/EndUsers";
import React, { useState } from 'react';


const App = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const showUsers = () => {
    setCurrentPage('users');
  };

  const showCreateUser = () => {
    setCurrentPage('create-user');
  };

  const showEndUsers = () => {
    setCurrentPage('end-users');
  };

  const showCompanies = () => {
    setCurrentPage('companies');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'users':
        return (
          <div>
            <button onClick={showEndUsers}>End Users</button>
            <button onClick={showCompanies}>Companies</button>
          </div>
        );
      case 'create-user':
        return <h1>Create User Page</h1>; {/* Render your Create User page here */}
      case 'end-users':
        return (
          <div>
            <button onClick={showEndUsers}>End Users</button>
            <button onClick={showCompanies}>Companies</button>
            <EndUsers />
          </div>
        );
      case 'companies':
        return (
          <div>
            <button onClick={showEndUsers}>End Users</button>
            <button onClick={showCompanies}>Companies</button>
            <CompanyPage />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <button onClick={showUsers}>Users</button>
        <button onClick={showCreateUser}>Create User</button>
      </div>

      {renderPage()}
    </div>
  );
};

export default App;