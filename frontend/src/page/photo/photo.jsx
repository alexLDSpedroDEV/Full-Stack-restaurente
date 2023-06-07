import React from "react"; 
import './photo.css'
import parto from '../../public/laurels.png'
import dec from '../../public/spoon.png'
import img1 from '../../public/findus.png'




export const Photo = () => {
    
    return <div class="contaiPhoto">
        <section className="containerPhoto">
            <div className="boxTextGalery">
                <h4>Instagram</h4>
                <img src={dec} alt="trasinho em baixo do testo" />
                <h1>Photo Gallety</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button> View More</button>
            </div>
            <div className="photoboxImg">
                <div className="photoboxImgImg"></div>
                <div className="photoboxImgImg1"></div>
                <div className="photoboxImgImg2"></div>
            </div>
        </section>
        <section className="containerFinds"  id="contact">
            <div className="boxTextFinds">
                <h4>Contact</h4>
                <img src={dec} alt="trasinho em baixo do testo" />
                <h1>Find Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum do</p>
                <h4 className="tets">Opening Hours</h4>

                <p>Mon - Fri: 10:30 Am - 02:00 Am <br/> Sat - Sun: 10:00 Am - 03:00 Am</p>

                <button> Visit Us </button>
            </div>
            <div className="boxFindImg">
                <img src={img1} alt="" />
            </div>
        </section>
    </div>
}