import React from "react"; 
import './header.css'
import main from '../../public/welcome.png'
import dec from '../../public/spoon.png'

export const Header = () => {
    
    return <div class="contaiMain">
        <section className="conatinermain" id="Home">
            <div className="boxTextHeader">
                <h3>Chasde the New flavour</h3>
                <img src={dec} alt="" />
                <h1>THE KEY TO FINE DINING</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas expedita tempore nostrum. Dolore consequatur laboriosam nesciunt. Praesentium assumenda placeat provident a odit mollitia saepe voluptatem vel</p>
                <button>
                    Explore Menu
                </button>
            </div>
            <div className="headerImg">
                <img className="imgHeander" src={main} alt="" />
            </div>
        </section>
    </div>
}