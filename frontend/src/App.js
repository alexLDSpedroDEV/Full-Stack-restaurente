/* import TelaDeLogin from './componentes/TelaDeLogin' */
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from "./components/navbar/navbar"

import React, { useEffect, useState } from 'react'
import { Folder } from './components/folder/folder'
import { Main } from './page/main/main'
import Login from './page/login/login'




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
              <Route path="/index" element={<Main />} />
              <Route path="/shop" element={<Main/>} />
              <Route path="/card" element={<Main/>} />
              <Route path="/logar" element={<Main/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
            <Folder />
          </Router>
         
        
    </section>
  )
}
export default App
