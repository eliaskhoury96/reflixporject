import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  const [users, setUsers] = useState([
    { id: 1, name: "User1"},
    { id: 2, name: "User2"},
    { id: 3, name: "User3"},
  ]);

  return (
    <div>
         <h1>User Selection</h1>
      {users.map((user, index) => (
        <Link key={index} to="/catalog">
        <div className={`user-box user${user.id}`}>
      
            <p>{user.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Landing;


