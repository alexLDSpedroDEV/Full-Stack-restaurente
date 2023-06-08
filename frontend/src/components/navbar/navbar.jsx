import React, {useState }from "react"; 
import { Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import logo from "../../public/gericht.png";
import './navbar.css';
import { AiOutlineMenu } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'


export const Navbar = ({acao}) => {

    const [isSignUp, setSignUp] = useState(false);

    return <div>
            
                
            <div id="navbar" className={acao ? 'ativaCor' : ''}>
                <Link className="Logo links" to="/"><img src={logo} alt="" /></Link>
                <div className="links dds">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
                    

                    <a className="link" href="/index/#Home"> Home </a>
                    <a className="link" href="/index/#About"> About</a>
                    <a className="link" href="/index/#Menu"> Menu </a>
                    <a className="link" href="/index/#Awards">Awards</a>
                    <a className="link" href="/index/#contact">Contact</a>
                    <a className="link" href="/login">Login</a>
                    <a className="link" href="/singin">Sing-in</a>
                    
                </div>
                <span className="links" onClick={() => setSignUp(true)}>
                        <Link className="link"> <AiOutlineMenu /></Link>
                </span>
            </div>
            <div className={isSignUp ? "active" : "navClose"}>
                <div>
                    <Link className="Logo links" to="/"><img src={logo} alt="" /></Link>
                    <ul> 
                        <li>  <a className="link" href="#Home" onClick={() => setSignUp(false)}> Home </a> </li>
                        <li> <a className="link" href="#About" onClick={() => setSignUp(false)}> About</a> </li>
                        <li>  <a className="link" href="#Menu" onClick={() => setSignUp(false)}> Menu </a> </li>
                        <li> <a className="link" href="#Awards" onClick={() => setSignUp(false)}>Awards</a> </li>
                        <li> <a className="link" href="#contact" onClick={() => setSignUp(false)}>Contact</a> </li>
                        <li> <a className="link" href="/login">Login</a> </li>
                        <li> <a className="link" href="/singin">Sing-in</a> </li>
                    </ul>
                    <span className="span" onClick={() => setSignUp(false)}> x </span>

                </div>
                
            </div>
    </div>
    
}