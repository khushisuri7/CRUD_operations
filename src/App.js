
import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home /> } />
      <Route path="/all" element={<AllUsers /> } />
      <Route path="/add" element={<AddUser />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
