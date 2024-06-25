import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>home</Link>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/post/:newId' element={<PostDetail></PostDetail>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
