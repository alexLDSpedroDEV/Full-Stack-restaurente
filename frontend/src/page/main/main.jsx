import React, {useEffect, useState} from "react"; 
import './main.css'
import { Header } from '../header/header'
import { About } from '../about/about'
import { Menu } from '../menu/menu'
import { Awards } from '../awards/awards'
import { Laurels } from '../laurels/laurels'
import { Photo } from '../photo/photo'
import { Navbar } from "../../components/navbar/navbar";
import { Folder } from "../../components/folder/folder";
 
export const Main = () => {
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

    return <div class="contaiMain">
        <Navbar acao={ativaCor}/>
        <Header />
        <About />
        <Menu />
        <Awards />
        <Laurels />
        <Photo />
        <Folder />
    </div>
}