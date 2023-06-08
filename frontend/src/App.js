/* import TelaDeLogin from './componentes/TelaDeLogin' */
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from "./components/navbar/navbar"

import React, { useEffect, useState } from 'react'
import { Folder } from './components/folder/folder'
import { Main } from './page/main/main'
import Login from './page/login/login'
import SingIn from './page/sing-in/sing-in'
import Catalogo from './page/catalogo/catalogo'
import SingInAdmin from './page/singInAdmin/singInAdmin'


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
              {/* criando os path para a pagina index */}
              <Route path="/"         element={<Main />} />
              <Route path="/index"    element={<Main />} />
              <Route path="/shop"     element={<Main />} />
              <Route path="/card"     element={<Main />} />

              {/* criando os path para os usuarios do site */}
              <Route path="/login"    element={<Login />} />
              <Route path="/singin"   element={<SingIn />} />
              <Route path="/login/true/thfjhhdbawkjudhnaudauwjj/catalogo"   element={<Catalogo />} />
              

              {/* criando as path para os funcionarios */}
              <Route path="/admin"   element={<SingInAdmin />} />
              <Route path="/admin/areaDeTrabalho"   element={<SingInAdmin />} />
              
            </Routes>
            <Folder />
          </Router>
         
        
    </section>
  )
}
export default App
