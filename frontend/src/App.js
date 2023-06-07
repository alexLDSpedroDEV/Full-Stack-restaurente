/* import TelaDeLogin from './componentes/TelaDeLogin' */
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from "./components/navbar"

import React, { useEffect, useState } from 'react'
import { Folder } from './components/folder'
import { Main } from './page/main/main'




function App() {
  
  



  const [ativaCor, setAtivar] = useState(false);
  



  useEffect(function(){
    function posScoll(){
        if(window.scrollY > 40){
          setAtivar(true)
        } else {
          setAtivar(false)
        }
      }

      window.addEventListener('scroll', posScoll)
  }, [])

  return (
    <section > 
        
          <Router>
            <Navbar acao={ativaCor}/>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/shop" element={<Main/>} />
              <Route path="/card" element={<Main/>} />
              <Route path="/logar" element={<Main/>} />
            </Routes>
            <Folder />
          </Router>
         
        
    </section>
  )
}
export default App
