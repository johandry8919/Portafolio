

import './App.css';

import {Route, Routes } from 'react-router-dom';
import Nav from './component/Nav/Nav';
import Fotter from './component/Footter/Fotter';
import Inicio from './component/Inicio';
import QuienSoy from './component/QuienSoy/QuienSoy'
import Jumbostron from './component/Jumbostrop/Jumbostron'


function App() {
  return (
    <div className="App">
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={ <Inicio/>} />
      <Route path="/QuienSoy" element={<QuienSoy />} />
      <Route path="/Miproyectos" element={<Jumbostron />} />
      
    </Routes>
    <Fotter/>
    </>
        

      

    </div>
  );
}

export default App;
