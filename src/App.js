import './App.css';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Technologies from './pages/Technologies'
import Contact from './pages/Contact'
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
