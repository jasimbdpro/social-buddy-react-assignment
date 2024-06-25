import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
import HomeIcon from '@mui/icons-material/Home';

function App() {
  return (
    <HashRouter>
      <Link to='/'><HomeIcon></HomeIcon></Link>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/post/:newId' element={<PostDetail></PostDetail>} ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
