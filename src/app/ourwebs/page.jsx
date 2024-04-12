"use client";

import React from "react";
import './ourwebs.css'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const page = () => {
      
  // TODO: Implement gsap text animation
    useGSAP(() => {
      gsap.fromTo(".letter", {
        opacity: 0,
        ease: "power1.out"
      }, {
        opacity: 1,
        delay: 2,
        stagger: 0.1
      })
      
      gsap.fromTo(".para", {
        opacity: 0,
        ease: "decay.inOut",
        y: -70
      }, {
        opacity: 1,
        y: -100,
        delay: 4,
      })
    }, []);
  

    return (
      <section className="stuff">
        <div className="messages-our">
          <h2 id="text" >
            <p className="letter">H</p>
            <p className="letter">e</p>
            <p className="letter">r</p>
            <p className="letter">e</p>
            <p className="letter">'</p>
            <p className="letter">s</p>
            <p className="letter">&nbsp;</p>
            <p className="letter">W</p>
            <p className="letter">h</p>
            <p className="letter">a</p>
            <p className="letter">t</p>
            <p className="letter">&nbsp;</p>
            <p className="letter">W</p>
            <p className="letter">e</p>
            <p className="letter">'</p>
            <p className="letter">v</p>
            <p className="letter">e</p>
            <p className="letter">&nbsp;</p>
            <p className="letter">D</p>
            <p className="letter">o</p>
            <p className="letter">n</p>
            <p className="letter">e</p>
          </h2>
          <p className="para">There might be a few suprises...</p>
        </div>
      </section>
    );
  }
  
  export default page;