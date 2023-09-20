import './footer.scss'
import dark_logo from '../img/dark_logo.svg'
import light_logo from '../img/light_logo.svg'
import React from "react";
import {Link, useNavigate} from "react-router-dom";
export default function Footer(props){
    const classPrefix='footer'
    const {mode}=props
    const navigate=useNavigate()
    const handleNav=(dest,state)=>navigate(dest,state)
    return (
        <div className={`flexbox ${classPrefix}`}>
            <div className={"flexbox mw flexbox-col"}>
                <button onClick={()=>handleNav('/')}>
                    <img src={!mode?dark_logo:light_logo} className={`${classPrefix}-logo`}/>
                </button>
                <div className={"flexbox foot-nav"}>
                    <div>
                        <div><Link to={'/about-us'}>About Us</Link></div>
                        <div><Link to={'/whitepaper'}>Whitepaper</Link></div>
                        <div><Link to={'/public-information'}>Public Information</Link></div>
                        <div><Link to={'/legal-and-privacy-provisions'}>Legal and privacy provisions</Link></div>
                    </div>
                    <div>
                        <div><Link to={'/contact-us'}>Contact Us</Link></div>
                        <div><Link to={'/faq'}>FAQ</Link></div>
                        <div><Link to={'/media-reports'}>Media reports</Link></div>
                        <div><Link to={'/sns'}>SNS</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}