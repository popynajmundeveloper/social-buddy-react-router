
import { useEffect, useState } from 'react';
import './App.css';
import Posts from './Posts/Posts';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
 .then(res=> res.json())
.then(data=>setUsers(data));
  },[])
  return (
    <div >
      <h3>Dynamic:{users.length}</h3>
      <ul>
      {users.map(user => <Posts user = {user}></Posts> )}
      </ul>
     <Posts></Posts>
    </div>
  );
}

export default App;
