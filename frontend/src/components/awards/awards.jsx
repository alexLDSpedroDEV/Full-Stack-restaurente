import React from "react"; 
import './awards.css'
import dec from '../../public/spoon.png'
import name from '../../public/sign.png'
import pessoa from '../../public/chef.png'
import video from '../../public/meal.mp4'
import { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { BsStopCircle } from "react-icons/bs";


export const Awards = () => {
    const [playVideo, setplayVideo] = useState(false);
    const vidref = React.useRef();

    const handleVideo = () => {
        setplayVideo((prevPlayVideo) => !prevPlayVideo);

        if(playVideo){
            vidref.current.pause();
        } else{
            vidref.current.play();
        }
    }
    return <div class="ConatAwards">
        <section className="ContainerAwards" id="Awards">
            <div className="boxImgAwards">
                <img src={pessoa} alt="" />
            </div>
            <div className="boxTextaWard">
                <h3>Chefs words</h3>
                <img src={dec} alt="" />
                <h1>What We Believe in</h1>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, commodi? Nisi sapiente beatae, obcaecati nihil neque mollitia sint expedita magni facere atque et quod corporis? Omnis iste et facere in.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, commodi? Nisi sapiente beatae, obcaecati nihil neque mollitia sint expedita magni facere atque et quod corporis? Omnis iste et facere in.
                </p>
                <h4>Kevin tomer</h4>
                <h3>Chef & founder</h3>

                <img className="imgName" src={name} alt="" />

            </div>
        </section>
        <section className="containerImg">
            <div className="uus" onClick={handleVideo}>
                {playVideo ? <BsStopCircle size={100} className="text"/> : <BsPlayCircle size={100} />}
            </div>
            <video 
                src={video} 
                ref={vidref}
                type="video/mp4"
                loop
                controls={false}
                muted    
                
            />
            
            
        </section>

    </div>
}