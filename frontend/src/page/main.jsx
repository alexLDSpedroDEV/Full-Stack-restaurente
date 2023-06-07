import React from "react"; 
import './main.css'
import { Header } from '../header/header'
import { About } from '../about/about'
import { Menu } from '../menu/menu'
import { Awards } from '../awards/awards'
import { Laurels } from '../laurels/laurels'
import { Photo } from '../photo/photo'
 
export const Main = () => {
    
    return <div class="contaiMain">
        <Header />
        <About />
        <Menu />
        <Awards />
        <Laurels />
        <Photo />
    </div>
}