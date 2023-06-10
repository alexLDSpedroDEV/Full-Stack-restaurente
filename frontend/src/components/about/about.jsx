import React from "react"; 
import './about.css'
import knife from '../../public/knife.png'
import dec from '../../public/spoon.png'

export const About = () => {
    
    return <div class="contaiabaou">
        <section className="containerAbout" id="About">
            <div className="box boxAbout">
                <h1>About Us</h1>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure praesentium ea ratione, ullam at corrupti laboriosam a sint obcaecati incidunt alias officiis. Modi mollitia itaque dignissimos reprehenderit tempore praesentium.</p>
                <button className="btnleft">know More</button>
            </div>
            <div className="box">
                <img className="img" src={knife} alt="" />
            </div>
            <div className="box" id="text">
                <h1>Our History</h1>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure praesentium ea ratione, ullam at corrupti laboriosam a sint obcaecati incidunt alias officiis. Modi mollitia itaque dignissimos reprehenderit tempore praesentium.</p>
                <button>know More</button>
            </div>
            
        </section>
    </div>
}