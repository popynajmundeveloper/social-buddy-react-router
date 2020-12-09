import React from 'react';
import { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {const [friends, setFriends] = useState([]);
    useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=> res.json())
   .then(data=>setFriends(data));
    },[])
    return (
        <div>
            <h3>Posts of friend:{friends.length}</h3>
      
      {friends.map(friend => <Posts friend = {friend}></Posts> )}
        </div>
    );
};

export default Home;