import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'
import Nav from './composant/Navigation';
import Issues from "./pages/Issues";
import Favoris from './pages/Favoris';



function App() {
  return (
    <div className="App">
        <Nav/>
        <Routes>
          <Route path='*' element={ <Home/>} />
          <Route path='about' element={ <About/>} />
          <Route path='projects' element={ <Projects/>} />
          <Route path='issues/:id' element={ <Issues />} />
          <Route path='favoris' element={ <Favoris/>} />
        </Routes>
    </div>
    /* Création des # routes pour l'accès aux autres pages */
    );
}

export default App;