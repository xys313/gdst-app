import React, {Component, useEffect, useRef} from "react";
import { withTranslation } from "react-i18next";
import './homepage.scss'
import Spline from "@splinetool/react-spline";
import scene_code from '../img/scene.splinecode'
import * as THREE from 'three';
import city_pic from "../img/city.png"
import coin_pic from "../img/coin.svg"
// import Spline3DViewer from "../components/Spline3DViewer";

const light_circle_icon=<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <circle cx="12.8333" cy="12" r="11.5" fill="#D0A02B" stroke="#DDDDDD"/>
    <circle cx="12.8333" cy="12" r="7" fill="#EDEDED" stroke="#D0A02B" stroke-width="2"/>
</svg>

const dark_circle_icon=<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11.5" fill="#FFBC00" stroke="#DDDDDD"/>
    <circle cx="12" cy="12" r="7" fill="#121212" stroke="#D0A02B" stroke-width="2"/>
</svg>

export default  function HomePage(props){
    const classPrefix='home'
    const {mode}=props

    const app_primary_color_1=!mode?'#D0A02B':'#D4B25B'

    return (
        <div className={`flexbox flexbox-col ${classPrefix}`}>
            <div className={"flexbox mw sec1"}>
                <div className={"flexbox sec1-lf"}>
                    {/*<div ref={containerRef}></div>*/}
                    {/*<Spline scene={'https://prod.spline.design/xsxlg8ye6X1HMEKw/scene.splinecode'}/>*/}
                    {/*<Spline scene={'https://my.spline.design/untitled-7921f5f8b3cd215e188f2f263c49428d/scene.splinecode'}/>*/}
                    <div className={"main-pic"}
                         // style={{transform:'translateX(-100px)',}}
                    >
                        <Spline style={{

                            height:'100%',width:'100%'}} disableZoom={true} scene={scene_code}/>
                    </div>

                    {/*<Spline3DViewer/>*/}
                    {/*<img classNameame={"main-pic"} src={coin_pic}/>*/}
                </div>
                <div className={"flexbox flexbox-col sec1-rg"}>
                   <div>
                       <h1>DGS Gold</h1>
                       <p className={'fz-18'}>A digital asset that anchors the value of gold</p>
                   </div>
                   <div>
                       <button className={'btn btn-bgc text-2'}>Buy GDST</button>
                       <button className={'btn btn-tp1'}>Whitepaper</button>
                   </div>
                </div>
            </div>

            <div className={"flexbox flexbox-col colre"}>
                <div className={"flexbox mw sec2 flexbox-col"}>
                    <div className={"flexbox flexbox-col"}>
                        <h2>Gold Allocation Lookup</h2>
                        <p className={"fz-18"}>Enter the address that holds your GDST tokens below.</p>
                    </div>
                    <div className={"flexbox"}>
                        <div className={'flexbox search'}>
                            <div className={'flexbox search-icon'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M16.7851 8.78614C16.7851 13.2443 13.1875 16.8584 8.74972 16.8584C4.31191 16.8584 0.714355 13.2443 0.714355 8.78614C0.714355 4.32795 4.31191 0.713867 8.74972 0.713867C13.1875 0.713867 16.7851 4.32795 16.7851 8.78614ZM3.28567 8.78614C3.28567 11.8177 5.73201 14.2753 8.74972 14.2753C11.7674 14.2753 14.2138 11.8177 14.2138 8.78614C14.2138 5.75457 11.7674 3.297 8.74972 3.297C5.73201 3.297 3.28567 5.75457 3.28567 8.78614Z" fill="#EEEEEE"/>
                                    <path d="M13.4776 12.5267C13.8699 12.1327 14.5058 12.1327 14.8981 12.5267L21.2902 18.9482C21.6824 19.3422 21.6824 19.9811 21.2902 20.3752L20.58 21.0887C20.1877 21.4827 19.5517 21.4827 19.1595 21.0887L12.7674 14.6672C12.3751 14.2732 12.3752 13.6343 12.7674 13.2402L13.4776 12.5267Z" fill="#EEEEEE"/>
                                </svg>
                            </div>
                            <input className={""} placeholder={"Ethereum address"}/>
                            <button className={"btn btn-bgc text-3"}>
                                Look up
                            </button>
                        </div>
                        <div className={'flexbox connect-wallet'}>
                            <button className={"btn btn-tp2"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M13.0666 7.22375H11.2C10.1691 7.22375 9.33334 8.09056 9.33334 9.15982C9.33334 10.2291 10.1691 11.0959 11.2 11.0959H13.0666V13.0319C13.0666 13.5666 12.6488 14 12.1333 14H0.933334C0.417867 14 3.33786e-07 13.5666 0 13.0319V5.28768C3.33786e-07 4.75305 0.417867 4.31965 0.933334 4.31965H12.1333C12.6488 4.31965 13.0666 4.75305 13.0666 5.28768V7.22375ZM9.8 0.969276V3.35161H1.4L8.48774 0.0844923C9.10489 -0.199976 9.8 0.268703 9.8 0.969276ZM11.2 8.19179H13.0666C13.5821 8.19179 14 8.62519 14 9.15982C14 9.69446 13.5821 10.1279 13.0666 10.1279H11.2C10.6845 10.1279 10.2667 9.69446 10.2667 9.15982C10.2667 8.62519 10.6845 8.19179 11.2 8.19179Z" fill={app_primary_color_1}/>
                                </svg>
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                </div>

                <div className={"flexbox flexbox-col mw sec3"}>
                    <div className={"flexbox flexbox-col gold-price"}>
                        <h2>Real-time gold prices</h2>
                        <div className={"flexbox price"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="402" height="112" viewBox="0 0 402 112" fill="none">
                                <path d="M56.2611 4.15827C57.6455 1.71216 60.2388 0.2 63.0494 0.2H338.951C341.761 0.2 344.355 1.71216 345.739 4.15827L400.069 100.158C403.011 105.358 399.255 111.8 393.28 111.8H8.71977C2.74511 111.8 -1.01125 105.358 1.93145 100.158L56.2611 4.15827Z" fill="url(#paint0_linear_219_504)" stroke="url(#paint1_linear_219_504)" stroke-width="0.4"/>
                                <defs>
                                    <linearGradient id="paint0_linear_219_504" x1="201" y1="-65.1163" x2="201" y2="112" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D0A02B"/>
                                        <stop offset="1" stop-color="#D0A02B" stop-opacity="0"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_219_504" x1="201" y1="0" x2="201" y2="112" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFD966"/>
                                        <stop offset="1" stop-color="#FFD966" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            $ 1980.8
                        </div>
                    </div>

                    <div className={"flexbox price-row"}>
                        <div className={"flexbox flexbox-col"}>
                            {mode?light_circle_icon:dark_circle_icon}
                            <p className={"fz-18"}>USD Market Cap</p>
                            <p className={"fz-24"} style={{color:`${mode?'#D0A02B':'#FFBC00'}`}}>$ 492,388,198</p>
                        </div>
                        <div className={"flexbox flexbox-col"}>
                            {mode?light_circle_icon:dark_circle_icon}
                            <p className={"fz-18"}>USD Market Cap</p>
                            <p className={"fz-24"} style={{color:`${mode?'#D0A02B':'#FFBC00'}`}}>869</p>
                        </div>
                        <div className={"flexbox flexbox-col"}>
                            {mode?light_circle_icon:dark_circle_icon}
                            <p className={"fz-18"}>Gold Kilograms</p>
                            <p className={"fz-24"} style={{color:`${mode?'#D0A02B':'#FFBC00'}`}}>8862,62</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"flexbox mw sec4"}>
                <div className={"lf"}>
                    <div>
                        <img src={city_pic}/>
                    </div>

                </div>
                <div className={"flexbox flexbox-col rg"}>
                    <h1>GDST Specialty</h1>
                    <p className={"fz-12 lh-150p"}>GDST tokens anchor the price of physical gold, holding GDST is equivalent to holding physical gold, while at the same time acquiring all the original characteristics of cryptographic assets.</p>
                </div>
            </div>

            <div className={"flexbox mw sec5"}>
                <div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                            <path d="M32.28 1.66357H22.62C21.6 1.66357 20.82 2.44357 20.82 3.46357V13.1236C20.82 14.1436 21.6 14.9236 22.62 14.9236H32.28C33.3 14.9236 34.08 14.1436 34.08 13.1236V3.46357C34.08 2.44357 33.24 1.66357 32.28 1.66357ZM13.38 22.0036H3.71998C2.69998 22.0036 1.91998 22.7836 1.91998 23.8036V33.4636C1.91998 34.4836 2.69998 35.2636 3.71998 35.2636H13.38C14.4 35.2636 15.18 34.4836 15.18 33.4636V23.8036C15.18 22.8436 14.4 22.0036 13.38 22.0036Z" fill="#E8C047"/>
                            <path d="M19.32 3.88359C19.32 3.22359 18.78 2.68359 18.12 2.68359C9.36003 2.68359 2.28003 9.76359 2.28003 18.5236C2.28003 19.1836 2.82003 19.7236 3.48003 19.7236C4.14003 19.7236 4.68003 19.1836 4.68003 18.5236C4.68003 11.0836 10.68 5.08359 18.12 5.08359C18.78 5.08359 19.32 4.54359 19.32 3.88359ZM32.76 17.3236C32.1 17.3236 31.56 17.8636 31.56 18.5236C31.56 25.9636 25.56 31.9636 18.12 31.9636C17.46 31.9636 16.92 32.5036 16.92 33.1636C16.92 33.8236 17.46 34.3636 18.12 34.3636C26.88 34.3636 33.96 27.2836 33.96 18.5236C33.96 17.8636 33.42 17.3236 32.76 17.3236Z" fill="url(#paint0_linear_219_552)"/>
                            <defs>
                                <linearGradient id="paint0_linear_219_552" x1="18.12" y1="2.68359" x2="18.12" y2="34.3636" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#CFCFCF"/>
                                    <stop offset="1" stop-color="#CFCFCF" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h4>Transfer simple</h4>
                    <p>Like other cryptographic, asset-based GDST tokens on a blockchain network, you can easily transfer and exchange them.</p>
                </div>
                <div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                        <g clip-path="url(#clip0_219_558)">
                            <path d="M33.9851 0.463379H23.1716C22.0299 0.463379 21.1567 1.29909 21.1567 2.39195V12.742C21.1567 13.8348 22.0299 14.6705 23.1716 14.6705H33.9851C35.1269 14.6705 36 13.8348 36 12.742V2.39195C36 1.29909 35.0597 0.463379 33.9851 0.463379ZM12.8284 22.2562H2.01493C0.873134 22.2562 0 23.092 0 24.1848V34.5348C0 35.6277 0.873134 36.4634 2.01493 36.4634H12.8284C13.9701 36.4634 14.8433 35.6277 14.8433 34.5348V24.1848C14.8433 23.1562 13.9701 22.2562 12.8284 22.2562Z" fill="#E8C047"/>
                            <path d="M0 2.47831L0 13.2917C0 14.4335 0.835715 15.3067 1.92857 15.3067H12.2786C13.3714 15.3067 14.2071 14.4335 14.2071 13.2917V2.47831C14.2071 1.33651 13.3714 0.463379 12.2786 0.463379H1.92857C0.835715 0.463379 0 1.40368 0 2.47831ZM21.7929 23.635V34.4485C21.7929 35.5902 22.6286 36.4634 23.7214 36.4634H34.0714C35.1643 36.4634 36 35.5902 36 34.4485V23.635C36 22.4932 35.1643 21.6201 34.0714 21.6201H23.7214C22.6929 21.6201 21.7929 22.4932 21.7929 23.635Z" fill="url(#paint0_linear_219_558)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_219_558" x1="-0.321585" y1="0.329051" x2="47.6619" y2="39.5584" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#CECECB"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            <clipPath id="clip0_219_558">
                                <rect width="36" height="36" fill="white" transform="translate(0 0.463379)"/>
                            </clipPath>
                        </defs>
                    </svg></div>
                    <h4>Divide Freedom</h4>
                    <p>The smallest unit of GDST tokens is 0.000000001 grams of gold, and you are free to choose how much you want to buy.</p>
                </div>
                <div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                        <g clip-path="url(#clip0_219_565)">
                            <rect x="-2" y="-1.53662" width="40" height="40" rx="4" fill="url(#paint0_linear_219_565)"/>
                            <path d="M4 6.46338C3.44772 6.46338 3 6.91109 3 7.46338V26.198C3 26.7503 3.44772 27.198 4 27.198H32C32.5523 27.198 33 26.7503 33 26.198V7.46338C33 6.91109 32.5523 6.46338 32 6.46338H4ZM29.6954 11.1807C30.2476 11.1807 30.6954 11.6284 30.6954 12.1807V14.7288C30.6954 15.2811 30.2476 15.7288 29.6954 15.7288H6.30465C5.75236 15.7288 5.30465 15.2811 5.30465 14.7288V12.1807C5.30465 11.6284 5.75236 11.1807 6.30465 11.1807H29.6954Z" fill="#E8C047"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_219_565" x1="18" y1="-1.53662" x2="18" y2="38.4634" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#D9D9D9"/>
                                <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                            </linearGradient>
                            <clipPath id="clip0_219_565">
                                <rect width="40" height="40" fill="white" transform="translate(-2 -1.53662)"/>
                            </clipPath>
                        </defs>
                    </svg></div>
                    <h4>7X24 Transactions</h4>
                    <p>Physical gold trading is subject to the restrictions of location and trading time. By contrast, GDST tokens support all-day, all-weather trading and can be traded on any platform that supports GDST tokens trading globally.</p>
                </div>
                <div>
                    <div><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_224_720)">
                            <path d="M19.32 3.88359C19.32 3.22359 18.78 2.68359 18.12 2.68359C9.36003 2.68359 2.28003 9.76359 2.28003 18.5236C2.28003 19.1836 2.82003 19.7236 3.48003 19.7236C4.14003 19.7236 4.68003 19.1836 4.68003 18.5236C4.68003 11.0836 10.68 5.08359 18.12 5.08359C18.78 5.08359 19.32 4.54359 19.32 3.88359ZM32.76 17.3236C32.1 17.3236 31.56 17.8636 31.56 18.5236C31.56 25.9636 25.56 31.9636 18.12 31.9636C17.46 31.9636 16.92 32.5036 16.92 33.1636C16.92 33.8236 17.46 34.3636 18.12 34.3636C26.88 34.3636 33.96 27.2836 33.96 18.5236C33.96 17.8636 33.42 17.3236 32.76 17.3236Z" fill="url(#paint0_linear_224_720)"/>
                            <g clip-path="url(#clip1_224_720)">
                                <path d="M22.653 2.20823L13.8257 0.851484C13.6097 0.817734 13.3903 0.817734 13.1743 0.851484L4.347 2.20823C3.30244 2.37023 2.53125 3.26798 2.53125 4.32605V18.3087C2.53125 18.9735 2.84006 19.6013 3.36656 20.0063L12.1939 26.7968C12.5684 27.0848 13.0276 27.241 13.5 27.241C13.9724 27.241 14.4316 27.0848 14.8061 26.7968L23.6334 20.0063C24.1599 19.6013 24.4688 18.9735 24.4688 18.3087V4.32605C24.4688 3.26798 23.6976 2.37023 22.653 2.20823ZM20.9047 10.3859L13.5118 17.7788C13.3414 17.9492 13.1119 18.0252 12.8874 18.0117C12.6613 18.0252 12.4318 17.9492 12.2614 17.7788L7.01156 12.529C6.69431 12.2117 6.69431 11.692 7.01156 11.3747C7.3305 11.0558 7.85025 11.0558 8.1675 11.3747L12.8874 16.0947L19.7505 9.23161C20.0678 8.91436 20.5875 8.91436 20.9047 9.23161C21.222 9.54886 21.222 10.0686 20.9047 10.3859Z" fill="#E8C047"/>
                                <path d="M20.9047 10.3858L13.5118 17.7788C13.3414 17.9492 13.1119 18.0252 12.8874 18.0117C12.6613 18.0252 12.4318 17.9492 12.2614 17.7788L7.01156 12.529C6.69431 12.2117 6.69431 11.692 7.01156 11.3747C7.3305 11.0558 7.85025 11.0558 8.1675 11.3747L12.8874 16.0947L19.7505 9.23159C20.0677 8.91434 20.5875 8.91434 20.9047 9.23159C21.222 9.54884 21.222 10.0686 20.9047 10.3858Z" fill="white"/>
                            </g>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_224_720" x1="18.12" y1="2.68359" x2="18.0001" y2="57.1636" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#D7D3D3"/>
                                <stop offset="1" stop-color="#CFCFCF" stop-opacity="0"/>
                            </linearGradient>
                            <clipPath id="clip0_224_720">
                                <rect width="36" height="36" fill="white" transform="translate(0 0.463379)"/>
                            </clipPath>
                            <clipPath id="clip1_224_720">
                                <rect width="27" height="27" fill="white" transform="translate(0 0.463379)"/>
                            </clipPath>
                        </defs>
                    </svg></div>
                    <h4>Support for validation</h4>
                    <p>You can always check through our website vault, the allocation of physical gold quantity details.</p>
                </div>
                <div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                        <g clip-path="url(#clip0_224_729)">
                            <path d="M-2 12.749C-2 20.6396 4.39505 27.0346 12.2856 27.0346C20.1762 27.0346 26.5712 20.6396 26.5712 12.749C26.5712 4.85843 20.1762 -1.53662 12.2856 -1.53662C4.39505 -1.53662 -2 4.85843 -2 12.749Z" fill="url(#paint0_linear_224_729)"/>
                            <path d="M9.42889 24.1777C9.42889 32.0683 15.8239 38.4633 23.7145 38.4633C31.6051 38.4633 38.0001 32.0683 38.0001 24.1777C38.0001 16.2871 31.6051 9.89209 23.7145 9.89209C15.8239 9.89209 9.42889 16.2871 9.42889 24.1777Z" fill="#E8C047"/>
                            <path d="M22.1909 21.3205C22.2858 21.5103 22.3807 21.7 22.5704 21.8897C22.7601 22.0795 22.9498 22.2692 23.2344 22.3641C23.519 22.5538 23.8985 22.6487 24.2835 22.8384C24.9476 23.123 25.6172 23.4076 26.1864 23.6978C26.7556 23.9824 27.2355 24.3618 27.615 24.7469C27.9945 25.1263 28.3795 25.6062 28.5692 26.0806C28.759 26.5549 28.9487 27.2245 28.9487 27.8886C28.9487 28.5582 28.8538 29.1274 28.6641 29.6017C28.4744 30.0761 28.1898 30.556 27.8047 30.9354C27.4253 31.3149 26.9454 31.5995 26.471 31.7948C25.9018 31.9845 25.3271 32.1743 24.7579 32.2691V34.3618H23.0447V32.2691C22.4755 32.1743 21.9007 32.0794 21.3316 31.8897C20.7624 31.6999 20.2825 31.4153 19.903 30.9354C19.4287 30.556 19.1385 29.9812 18.8539 29.412C18.5693 28.8428 18.4744 28.0783 18.4744 27.2189H21.6161C21.6161 27.6933 21.711 28.1732 21.8059 28.4578C21.9007 28.8372 22.0905 29.027 22.3751 29.3171C22.5648 29.5069 22.8494 29.6966 23.1396 29.7915C23.4242 29.8863 23.7088 29.8863 23.9989 29.8863C24.3784 29.8863 24.663 29.8863 24.8583 29.7915C25.1429 29.6966 25.3326 29.6017 25.5224 29.412C25.7121 29.2223 25.807 29.0325 25.9018 28.8428C25.9967 28.6531 25.9967 28.3685 25.9967 28.0783C25.9967 27.7937 25.9967 27.5091 25.9018 27.3138C25.807 27.1241 25.7121 26.8395 25.5224 26.6498C25.3326 26.46 25.1429 26.2703 24.8583 26.1754C24.5737 25.9857 24.1943 25.8908 23.8092 25.7011C23.1452 25.4165 22.4755 25.1319 21.9063 24.8417C21.3371 24.5571 20.8572 24.1777 20.4778 23.7926C20.0983 23.4132 19.7133 22.9333 19.5235 22.4589C19.3338 21.9846 19.1441 21.315 19.1441 20.6509C19.1441 20.0817 19.2389 19.5069 19.4287 19.0326C19.6184 18.5583 19.903 18.0784 20.288 17.6989C20.6675 17.3195 21.1474 17.0349 21.6217 16.7447C22.0961 16.555 22.7657 16.3652 23.3349 16.2704V13.9824H25.048V16.2704C25.6172 16.3652 26.192 16.5549 26.7612 16.8395C27.2355 17.1241 27.7154 17.4087 28 17.8886C28.3795 18.2681 28.6641 18.8429 28.8594 19.4121C29.0491 19.9813 29.144 20.6509 29.144 21.315H26.0023C26.0023 20.4556 25.8125 19.7915 25.4331 19.4121C25.0536 19.0326 24.5737 18.748 24.0045 18.748C23.7199 18.748 23.4353 18.8429 23.1452 18.9377C22.9554 19.0326 22.7657 19.1275 22.576 19.3172C22.3862 19.5069 22.2914 19.6967 22.2914 19.8864C22.1965 20.0761 22.1965 20.3607 22.1965 20.6509C22.0961 20.8462 22.1909 21.1308 22.1909 21.3205Z" fill="white"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_224_729" x1="12.2856" y1="-1.53662" x2="12.2856" y2="27.0346" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#DADADA"/>
                                <stop offset="1" stop-color="#DADADA" stop-opacity="0"/>
                            </linearGradient>
                            <clipPath id="clip0_224_729">
                                <rect width="40" height="40" fill="white" transform="translate(-2 -1.53662)"/>
                            </clipPath>
                        </defs>
                    </svg></div>
                    <h4>Support physical exchange</h4>
                    <p>If you would like to exchange GDST for physical gold, we can assist in the delivery of physical gold bars. See“How to exchange physical gold”.</p>
                </div>
                <div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                        <g clip-path="url(#clip0_224_738)">
                            <path d="M36.2129 6.81909L29.6443 0.250522C29.1387 -0.250927 28.4564 -0.533623 27.7443 -0.536621L1.71429 -0.536621C0.994413 -0.536621 0.304023 -0.250653 -0.205004 0.258375C-0.714031 0.767402 -1 1.45779 -1 2.17766L-1 34.7491C-1 35.469 -0.714031 36.1594 -0.205004 36.6684C0.304023 37.1774 0.994413 37.4634 1.71429 37.4634H34.2857C35.0056 37.4634 35.696 37.1774 36.205 36.6684C36.714 36.1594 37 35.469 37 34.7491V8.71909C36.997 8.00703 36.7143 7.32466 36.2129 6.81909Z" fill="url(#paint0_linear_224_738)"/>
                            <rect x="4" y="4.46338" width="22" height="12" rx="2" fill="#E8C047"/>
                            <rect x="21" y="7.46338" width="3" height="6" fill="white"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_224_738" x1="18" y1="-0.536621" x2="18" y2="60.4634" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#D9D9D9"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            <clipPath id="clip0_224_738">
                                <rect width="38" height="38" fill="white" transform="translate(-1 -0.536621)"/>
                            </clipPath>
                        </defs>
                    </svg></div>
                    <h4>Low cost of preservation</h4>
                    <p>Keeping physical gold is expensive and potentially exposes the local risk. The GDST token as a chain, the assets and keep other cryptographic assets as simple.</p>
                </div>
            </div>
    </div>)
}