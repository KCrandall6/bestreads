import './App.css';
import Home from './pages/Home'
import Login from './pages/Login';
import { Route, Routes, Link } from 'react-router-dom'

function App() {

  return (
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
  );
}

export default App;
