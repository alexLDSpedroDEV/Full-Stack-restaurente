import React from "react"; 
import './menu.css'
import drink from '../../public/menu.png'
import dec from '../../public/spoon.png'

export const Menu = () => {
    
    return <div class="ConatMenu">
        <section className="Conatiner" id="Menu">
            <h2 className="Conatinerh2">Menu That Fits You Palatte</h2>
            <img className="Conatinerimg" src={dec} alt="" />
            <h1 className="Conatinerh1">Today's Special</h1>
            <div className="content">
                <div className="boxs">
                    <h2>Wine & Beer</h2>
                    <div className="itensTextMenu">
                        <div className="itensTextMe">
                            <h4>Chapel Hill Shiraz</h4>
                            <p>AU | Bottle</p>
                        </div>
                        <div className="itemValue">
                            $56
                        </div>
                    </div>
                    <div className="itensTextMenu">
                        <div className="itensTextMe">
                            <h4>Chapel Hill Shiraz</h4>
                            <p>AU | Bottle</p>
                        </div>
                        <div className="itemValue">
                            $56
                        </div>
                    </div>
                    <div className="itensTextMenu">
                        <div className="itensTextMe">
                            <h4>Chapel Hill Shiraz</h4>
                            <p>AU | Bottle</p>
                        </div>
                        <div className="itemValue">
                            $56
                        </div>
                    </div>
                    <div className="itensTextMenu">
                        <div className="itensTextMe">
                            <h4>Chapel Hill Shiraz</h4>
                            <p>AU | Bottle</p>
                        </div>
                        <div className="itemValue">
                            $56
                        </div>
                    </div>
                    <div className="itensTextMenu">
                        <div className="itensTextMe">
                            <h4>Chapel Hill Shiraz</h4>
                            <p>AU | Bottle</p>
                        </div>
                        <div className="itemValue">
                            $56
                        </div>
                    </div>
                </div>
                <div className=" boxsimg">
                    <img src={drink} alt="" />
                </div>
                <div className="boxs">
                    <h2>Cocktails</h2>
                    <div className="itensTextMenu">
                        <div className="itensTextMe">
                            <h4>Chapel Hill Shiraz</h4>
                            <p>AU | Bottle</p>
                        </div>
                        <div className="itemValue">
                            $56
                        </div>
                    </div>
                    <div className="itensTextMenu">
                        <div className="itensTextMe">
                            <h4>Chapel Hill Shiraz</h4>
                            <p>AU | Bottle</p>
                        </div>
                        <div className="itemValue">
                            $56
                        </div>
                    </div>
                    <div className="itensTextMenu">
                        <div className="itensTextMe">
                            <h4>Chapel Hill Shiraz</h4>
                            <p>AU | Bottle</p>
                        </div>
                        <div className="itemValue">
                            $56
                        </div>
                    </div>
                    <div className="itensTextMenu">
                        <div className="itensTextMe">
                            <h4>Chapel Hill Shiraz</h4>
                            <p>AU | Bottle</p>
                        </div>
                        <div className="itemValue">
                            $56
                        </div>
                    </div>
                    <div className="itensTextMenu">
                        <div className="itensTextMe">
                            <h4>Chapel Hill Shiraz</h4>
                            <p>AU | Bottle</p>
                        </div>
                        <div className="itemValue">
                            $56
                        </div>
                    </div>
                </div>

            </div>

        </section>
    </div>
}