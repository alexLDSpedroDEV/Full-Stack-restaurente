import React from "react"; 
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import './folder.css'


export const Folder = () => {
    
    return <div >
        <div className="folder">
            <div className="folderColunaCoffee">
                <h4>Gerícht restaurant</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus id felis </p>
                <div className="folderColunaBtn">
                    <button>
                        <FaFacebookF  size={20}/>
                    </button>
                    <button>
                        <AiOutlineInstagram  size={20}/>
                    </button>
                    <button>
                        <FaTiktok  size={20}/>
                    </button>
                    <button>
                        <AiOutlineTwitter  size={20}/>
                    </button>
                </div>
            </div>
            <div className="folderColunaSuport">
                <h4>Suport</h4>
                <p> Product</p>
                <p> Help & Support</p>
                <p> Retunr Policy</p>
                <p> Terms Of Use</p>
            </div>
            <div className="folderColunaView">
                <h4>View Guider</h4>
                <p> Features</p>
                <p> Careers</p>
                <p> Blog Post</p>
                <p> Our Branches</p>
            </div>
        </div>
        <div className="FolderDireito">
            <p>Projeto Academico todos os direito reservado para os autores || Dev: alexLopes  2023</p>
        </div>
    </div>
}