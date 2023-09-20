import React, {Component, useState} from "react";
import { withTranslation } from "react-i18next";
import './topNav.scss'
import dark_logo from '../img/dark_logo.svg'
import light_logo from '../img/light_logo.svg'
import {useNavigate} from "react-router-dom";

export default  function TopNav(props){
    const {changeMode}=props
    //0是深色模式，1是浅色模式
    const [mode,setMode]=useState(0)
    const navigate = useNavigate();
    const handleNav = (dest, state) => navigate(dest, state);

    const color=!mode?'#DDDDDD':'#888888'
    const classPrefix='top-nav'
    return (<div className={classPrefix}>
        <button onClick={()=>handleNav('/')}>
            <img src={!mode?dark_logo:light_logo} className={`${classPrefix}-logo`}/>
        </button>
        <div className={'rt'}>
            <button className={'btn btn-bgc text-1'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13.0666 7.22375H11.2C10.1691 7.22375 9.33334 8.09056 9.33334 9.15982C9.33334 10.2291 10.1691 11.0959 11.2 11.0959H13.0666V13.0319C13.0666 13.5666 12.6488 14 12.1333 14H0.933334C0.417867 14 3.33786e-07 13.5666 0 13.0319V5.28768C3.33786e-07 4.75305 0.417867 4.31965 0.933334 4.31965H12.1333C12.6488 4.31965 13.0666 4.75305 13.0666 5.28768V7.22375ZM9.8 0.969276V3.35161H1.4L8.48774 0.0844923C9.10489 -0.199976 9.8 0.268703 9.8 0.969276ZM11.2 8.19179H13.0666C13.5821 8.19179 14 8.62519 14 9.15982C14 9.69446 13.5821 10.1279 13.0666 10.1279H11.2C10.6845 10.1279 10.2667 9.69446 10.2667 9.15982C10.2667 8.62519 10.6845 8.19179 11.2 8.19179Z" fill="white"/>
                </svg>
                Connect Wallet
            </button>
            <button
                className={`${classPrefix}-toggle`}
                onClick={()=>{
                    setMode(pre=>!pre)
                    changeMode()
                }}
            ><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM1.68 14C1.68 20.8041 7.19585 26.32 14 26.32C20.8041 26.32 26.32 20.8041 26.32 14C26.32 7.19585 20.8041 1.68 14 1.68C7.19585 1.68 1.68 7.19585 1.68 14Z" fill={color}/>
                <path d="M23.3333 14.0001C23.3333 19.1547 19.1546 23.3334 14 23.3334C8.84533 23.3334 4.66666 19.1547 4.66666 14.0001C4.66666 8.84542 8.84533 4.66675 14 4.66675C19.1546 4.66675 23.3333 8.84542 23.3333 14.0001ZM6.53332 14.0001C6.53332 18.1238 9.87626 21.4667 14 21.4667C18.1237 21.4667 21.4667 18.1238 21.4667 14.0001C21.4667 9.87636 18.1237 6.53341 14 6.53341C9.87626 6.53341 6.53332 9.87636 6.53332 14.0001Z" fill={color}/>
                <path d="M14 4.66658C16.4753 4.66658 18.8493 5.64991 20.5997 7.40025C22.35 9.15059 23.3333 11.5246 23.3333 13.9999C23.3333 16.4753 22.35 18.8492 20.5997 20.5996C18.8493 22.3499 16.4753 23.3333 14 23.3333L14 13.9999L14 4.66658Z" fill={color}/>
            </svg>
            </button>
        </div>

    </div>)
}