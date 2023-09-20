import './whitepaperpage.scss'
import React from 'react';



export default function WhitepaperPage(){
    const classPrefix='whitepaper'
    return (
        <div className={classPrefix}>
            <div>
                <section className={`${classPrefix}-nav`}>
                    <div></div>
                </section>
                <section className={`${classPrefix}-article`}></section>
            </div>
        </div>
    )
}