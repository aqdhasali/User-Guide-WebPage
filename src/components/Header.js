"use client";

import {Poppins} from "@next/font/google";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";

const poppins = Poppins({
    weight:['200','400', '600','900'],
    subsets:['latin'],
  });


gsap.registerPlugin(useGSAP)

export default function Header(){
    const headerText = useRef()
    
    
    useGSAP(
        () => {
            gsap.from('.headerText',
                {duration:1,
                 opacity:0, 
                 scale:0.5, 
                 y:100,
                 ease:"power2.inOut",
                 transformOrigin:"center center",
                });
        })
    return(
        <div className=" flex items-center justify-center text-center min-h-screen bg-cover bg:auto bg-radial-gradient bg-center animate-pulse bg-no-repeat sm:bg-auto lg:bg-auto" ref={headerText}>
            <h1 className={`${poppins.className} headerText text-6xl lg:text-8xl sm:text-5xl md:text-6xl `}>User Guide</h1>        
        </div>

    )
        
}