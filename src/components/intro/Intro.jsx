import React, { useEffect, useRef } from 'react'
import "./Intro.scss"
import { init } from 'ityped';
import { LinkedIn, Instagram, GitHub } from "@material-ui/icons"

export default function Intro() {

    const textRef = useRef();
    useEffect(
        () => {
            init(textRef.current,
                {
                    showCursor: true,
                    backDelay: 1500,
                    strings: ['Java', 'Spring Boot', 'ReactJs']
                })
        }, []
    );
    return (
        <div className="intro" id="intro">

            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/Ankit.png" alt=""></img>

                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>
                        Hi! There I'am
                        </h2>
                    <h1>
                        Ankit Gupta
                    </h1>
                    <h3>
                        Developer <span ref={textRef}></span>
                    </h3>
                    <div>

                    </div>
                    <div className="icons">
                        <LinkedIn className="icon" onClick={
                            () => {
                                window.open('https://www.linkedin.com/in/95-ankit-gupta/')
                            }} />
                        <GitHub className="icon" onClick={
                            () => {
                                window.open('https://github.com/ankit-95')
                            }} />
                        <Instagram className="icon" onClick={
                            () => {
                                window.open('https://www.instagram.com/95ankit_gupta/')
                            }} />

                    </div>
                </div>
                <a href="#portfolio">
                    <img src="/assets/down.png"></img>
                </a>

            </div>
        </div>
    )
}
