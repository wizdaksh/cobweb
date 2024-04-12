"use client";

import React, {useState, useRef, useEffect } from 'react';
import Link from "next/link";

import "./menu.css";

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react"

import { Cross as Hamburger } from 'hamburger-react'

const menuLinks = [
    {path: "/", label: "The Nest"}, 
    {path: "/expandyourweb", label: "Expand Your Web"},
    {path: "/ourwebs", label: "Our Webs"},
    {path: "/engage", label: "Engage"},
    {path: "/thecluster", label: "The Cluster"},
];

const Menu = () => {
    const container = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const tl = useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    };

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", {y:200});

        tl.current = gsap
        .timeline({paused:true})
        .to(".menu-overlay", {
            duration: 2,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
            y:0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.inOut",
            delay: -0.75,
        });
    }, 
    {scope: container}
);

useEffect(() => {
    if (isMenuOpen) {
        tl.current.play()
    } else {
        tl.current.reverse();
    }  
}, [isMenuOpen])

    return (
        <div className="menu-container" ref={container}>
            <div className="menu-bar">
                <div className="menu-logo">
                    <Link href="/" className='company-name'>
                        <img src="images/spider.png" alt="ReWeb Logo" className="spider-logo"/>
                    </Link>
                </div>
                <div className="menu-open">
                    <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={50} distance="lg" color="#fff" label="Show menu" hideOutline={false} className='burger'/>
                </div>
            </div>
            <div className="menu-overlay">
                <div className="menu-overlay-bar">
                    <img src="images/spider.png" alt="ReWeb Logo" className="spider-logo-overlay"/>
                    <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={50} distance="lg" color="#000" label="Close menu" hideOutline={false} className='burger'/>
                </div>
                <div className="menu-copy">
                    <div className="menu-links">
                        {menuLinks.map((link, index) => (
                            <div className="menu-link-item" key={index}>
                                <div className="menu-link-item-holder" onClick={toggleMenu}>
                                    <Link href={link.path} className="menu-link">
                                        {link.label}
                                    </Link>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="menu-info">
                        <div className="menu-info-col contacts" id='contacts'>
                            <p>venom@reweb.com</p>
                            <p>571 358 5969</p>
                        </div>
                        <div className="menu-info-col" id='socials'>
                            {/*find new icons for socials*/}
                            <a href="#">X &#8599;</a>
                            <a href="https://instagram.com/rewebstudioo">Instagram &#8599;</a>
                            <a href="#">LinkedIn &#8599;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;