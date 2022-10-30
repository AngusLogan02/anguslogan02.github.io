import './App.css';
import { Helmet } from 'react-helmet'
import { useMediaQuery } from 'react-responsive'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Technologies from './pages/Technologies'
import Contact from './pages/Contact'
import Navbar from './components/navbar';

function App() {
  const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
  })
  
  if (isDesktop) {
    return (
      <div className='bg-black text-neutral-50 overflow-auto'>
        <Helmet>
          <title>Angus Logan</title>
        </Helmet>
        <Navbar screenType={ "desktop" } />
        <div className='w-5/6 ml-auto p-20' id='about'>
          <Home />
          <Projects />
          <Technologies />
          <Contact />
        </div>
      </div>
    );
  } else {
    return (
      <div className='bg-black text-neutral-50 overflow-auto'>
        <Helmet>
          <title>Angus Logan</title>
        </Helmet>
        <Navbar screenType={ "mobile" } />
        <div className='p-20 h-screen pt-32'>
        </div>
      </div>
    );
  }
}

export default App;
