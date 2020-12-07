
import { useEffect, useState } from 'react';
import './App.css';
import Posts from './Posts/Posts';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res=> res.json())
 .then(data=>setUsers(data));
  },[])
  return (
    <div >
      <h3>Posts of friend:{users.length}</h3>
      
      {users.map(user => <Posts user = {user}></Posts> )}
      
    
    </div>
  );
}

export default App;
