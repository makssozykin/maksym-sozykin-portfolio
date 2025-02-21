import { Routes, Route } from 'react-router-dom';
import './styles/index.css';
import { Codefield } from './assets/Codefield';
import Home from './pages/Home/Home';
import AboutMe from './pages/About/Aboutme.tsx';
import MyProjects from './pages/Projects/MyProjects.tsx';
import NotFound from './pages/NotFound/NotFound';
import { Header } from './components/Header/Header.tsx';
import { Footer } from './components/Footer/Footer.tsx';


function App() {
  Codefield();
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/projects' element={<MyProjects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
