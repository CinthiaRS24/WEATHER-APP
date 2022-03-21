import React from "react";
import s from './About.module.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

export default function About () {
    return (
        <div className={s.divGlobal}>

            <div className={s.aboutMe}>
                <h2 className={s.title}>Welcome to the Weather App</h2>

                <p className={s.bodyText}>
                    Hello👋, my name is Cinthia Ramos, and this time
                    I am pleased to present you my first application.
                    <br/>
                    <br/>
                    With Weather App, you will be able to know the current
                    climate of different cities around the world🌍. In addition,
                    you can see additional information for each city.
                    <br/>
                    <br/>
                    This application was developed using:
                    Javascript, React and pure CSS.
                </p>
            </div>

            <div className={s.allRedes}> 
                <h2 className={s.titleRedes}>Visit my social profiles</h2>
                
                
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/cinthia-stephany-ramos-suyon/" className={s.redes}>
                    <img className={s.imagenL} src={linkedin} alt="img not found"/>
                    <p className={s.textRedes}>LinkedIn</p>
                </a>
                
                
                <a target="_blank" rel="noreferrer" href="https://github.com/CinthiaRS24" className={s.redes}>
                    <img className={s.imagenG} src={github} alt="img not found"/>
                    <p className={s.textRedes}>GitHub</p>
                </a>
            </div>

        </div>
    )
}