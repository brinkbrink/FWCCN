import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';  // npm install axios
function App() {
  const [user, setUser] = useState([]); // user is an array of objects

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers').then((response) => {
      setUser(response.data);
    });
  }, []);
  return (
    <div className="App">
      <div className="user-display">
        <h1>Users</h1>
        {user.map((user) => {
          return (
          <div className="user" key={user.id}>
            <h1>Id: {user._id}</h1>
            <h2>Name: {user.name}</h2>
            <h3>Age: {user.age}</h3>
            <h3>Username: {user.username}</h3>
            </div>
            )
        })}              
      </div>
    </div>
  );
}

export default App;
