import React from "react"; 
import './laurels.css'
import parto from '../../public/laurels.png'
import dec from '../../public/spoon.png'
import img1 from '../../public/award01.png'
import img2 from '../../public/award02.png'
import img3 from '../../public/award03.png'
import img5 from '../../public/award05.png'


export const Laurels = () => {
    
    return <div class="contaiLaurels">
        <section className="containerLaurels">
            <div className="boxTextLaurels">
                <h4>Awards & Recognition</h4>
                <img src={dec} alt="trasinho em baixo do testo" />
                <h1>Our Laurels</h1>
                <div className="boxItens">
                    <div className="itens">
                        <div className="itensImg">
                            <img src={img1} alt="" />
                        </div>
                        <div className="itensText">
                            <h3>Bib Gourmond</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div>
                    </div>
                </div>
                <div className="boxItens">
                    <div className="itens">
                        <div className="itensImg">
                            <img src={img2} alt="" />
                        </div>
                        <div className="itensText">
                            <h3>Bib Gourmond</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div>
                    </div>
                </div>
                <div className="boxItens">
                    <div className="itens">
                        <div className="itensImg">
                            <img src={img3} alt="" />
                        </div>
                        <div className="itensText">
                            <h3>Bib Gourmond</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div>
                    </div>
                </div>
                <div className="boxItens">
                    <div className="itens">
                        <div className="itensImg">
                            <img src={img5} alt="" />
                        </div>
                        <div className="itensText">
                            <h3>Bib Gourmond</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="boxImgLaurels">
                <img src={parto} alt="" />
            </div>
        </section>
    </div>
}