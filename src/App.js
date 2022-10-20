import './App.css';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Technologies from './pages/Technologies'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technologies" element={<Technologies />} />
    </Routes>
  );
}

export default App;
