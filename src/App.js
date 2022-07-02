import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Tech from './components/Tech.jsx';
import Projects from './components/Projects.jsx';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

function App() {

  return (
    <>      
      <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/tech" element={<Tech/>}/>
            <Route exact path="/projects" element={<Projects/>}/>
            <Route exact path="*" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
