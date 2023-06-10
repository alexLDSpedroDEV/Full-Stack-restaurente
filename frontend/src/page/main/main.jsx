import React, {useEffect, useState} from "react"; 
import './main.css'
import { Header } from '../../components/header/header'
import { About } from '../../components/about/about'
import { Menu } from '../../components/menu/menu'
import { Awards } from '../../components/awards/awards'
import { Laurels } from '../../components/laurels/laurels'
import { Photo } from '../../components/photo/photo'
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