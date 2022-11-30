import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'
import Nav from './composant/Navigation';
import Issues from "./pages/Issues";
import { Provider } from "react-redux";
import { store } from "./composant/redux"



function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Nav/>
        <Routes>
          <Route path='*' element={ <Home/>} />
          <Route path='about' element={ <About/>} />
          <Route path='projects' element={ <Projects/>} />
          <Route path='issues/:id' element={ <Issues />} />
        </Routes>
    </div>
    </Provider>
    /* Création des # routes pour l'accès aux autres pages */
    );
}

export default App;