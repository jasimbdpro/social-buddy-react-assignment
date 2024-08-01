import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './App.css';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
import HomeIcon from '@mui/icons-material/Home';

function App() {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState([]);
  const [randomUser, setRandomUser] = useState({});
  useEffect(() => {
    //users
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(data => setUsers(data))
    //singe user
    fetch('https://jsonplaceholder.typicode.com/users/1/')
      .then(res => res.json())
      .then(data => setSingleUser(data))
    //random user
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => setRandomUser(data.results[3]))
  }, []);

  return (
    <HashRouter>
      <h1>Random User API: {randomUser.name?.first}</h1>
      <h1>JSON Placeholder: {singleUser.name}</h1>
      {
        users.map(i => <li key={i.id}>{i.name}</li>)
      }
      <Link to='/'><HomeIcon></HomeIcon></Link>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/post/:newId' element={<PostDetail></PostDetail>} ></Route>
      </Routes>

    </HashRouter>
  );
}

export default App;
