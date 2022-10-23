import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useMediaQuery } from 'react-responsive'

import Home from './pages/Home'
import Technologies from './pages/Technologies'
import Contact from './pages/Contact'
import Navbar from './components/navbar';

function App() {
  const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
  })
  
  if (isDesktop) {
    return (
      <div className='bg-black text-neutral-50'>
        <Helmet>
          <title>Angus Logan</title>
        </Helmet>
        <Navbar screenType={ "desktop" } />
        <div className='w-5/6 h-screen ml-auto p-20'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    );
  } else {
    return (
      <div className='bg-black text-neutral-50'>
        <Helmet>
          <title>Angus Logan</title>
        </Helmet>
        <Navbar screenType={ "mobile" } />
        <div className='h-screen p-20 pt-32'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
