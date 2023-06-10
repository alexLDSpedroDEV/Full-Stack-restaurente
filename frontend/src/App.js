/* import TelaDeLogin from './componentes/TelaDeLogin' */
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import React from 'react'

import Login from './page/login/login'
import SingIn from './page/sing-in/sing-in'
import Catalogo from './components/catalogo/catalogo'
import SingInAdmin from './page/singInAdmin/singInAdmin'
import { FuncionarioIndex } from './page/funcionarioPages/index'
import { Main } from './page/main/main'


function App() {
  


  return (
    <section > 
        
          <Router>
            
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
              <Route path="/admin/index"   element={<FuncionarioIndex />} />
              
            </Routes>
            
          </Router>
         
        
    </section>
  )
}
export default App
