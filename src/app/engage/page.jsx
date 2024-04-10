"use client";

import React from "react";
import './engage.css'
import { letters1, letters2, letters3 } from '../constants/index'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const page = () => {
  
  useGSAP(() => {
    gsap.fromTo(".letter-engage", {
      opacity: 0,
      ease: "power1.out"
      }, {
      opacity: 1,
      duration: 3,
      delay: 1,
      stagger: 0.1
    })
    gsap.fromTo(".para", {
      opacity: 0,
      ease: "decay.inOut",
      y: 20
    }, {
      opacity: 1,
      y: 0,
      delay: 4,
    })
  }, []);
  


  return (
      <section className="stuff">
        <div className="messages-engage">
          <div className="header-engage">
            {letters1.map((letter, index) => (
              <h2 key={index} className="letter-engage">{letter}</h2>
            ))}
            <h2>&nbsp;</h2>
            {letters2.map((letter, index) => (
              <h2 key={index} className="letter-engage">{letter}</h2>
            ))}
            <h2>&nbsp;</h2>
            {letters3.map((letter, index) => (
              <h2 key={index} className="letter-engage">{letter}</h2>
            ))}
          </div>            
          <p className="para">We'll work with you in every step of the process</p>
          {/* Add Form Here */}
        </div>
      </section>
    );
  }
  
  export default page;