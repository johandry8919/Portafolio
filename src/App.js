import './App.css';
import {Route, Routes } from 'react-router-dom';
import Nav from './component/Nav/Nav';
import Fotter from './component/Footter/Fotter';
import Inicio from './component/Inicio';
import QuienSoy from './component/QuienSoy/QuienSoy'
import Jumbostron from './component/Jumbostrop/Jumbostron'
import Abaut from './component/Abaut/Abaut'
import { useState } from 'react';




function App() {
  const [loader , setLoader] = useState(true)

  setTimeout(()=>{
    setLoader( false)
  },2000)
  return (
  
    <div className="App">
    <Nav/>
 
    <Routes>
    
      <Route path="/Portafolio" element={ <Inicio/>} />
      <Route path="/QuienSoy" element={<QuienSoy />} />
      <Route path="/Miproyectos" element={<Jumbostron />} />
      <Route path="*" element={<Abaut />} />
   
     
      
   
      
    </Routes>

    {loader && <h1>Cargando</h1>}
    <Fotter/>
  
 
        

      

    </div>
  );
}

export default App;
