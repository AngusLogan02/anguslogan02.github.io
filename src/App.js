import './App.css';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Technologies from './pages/Technologies'
import Contact from './pages/Contact'
import Navbar from './components/navbar';

function App() {
  return (
    <div className='bg-black text-neutral-50'>
      <Navbar />
      <div className='w-5/6 h-screen ml-auto p-20'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
