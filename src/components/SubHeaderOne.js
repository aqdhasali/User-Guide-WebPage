"use client";

import {Poppins} from "@next/font/google";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';


const poppins = Poppins({
    weight:['200','400', '600','900'],
    subsets:['latin'],
  });


gsap.registerPlugin(useGSAP,ScrollTrigger)



export default function SubHeaderOne(){
    const subHeaderTextOne = useRef()
    
    
    useGSAP(
        () => {
            gsap.from(subHeaderTextOne.current,{
                duration:2, 
                opacity:0, 
                scale:0.5, 
                ease:"power2.inOut",
                scrollTrigger: {
                    trigger: subHeaderTextOne.current, // Trigger when this element scrolls into view
                    start: "top 100%", // When the top of the element is 80% down the viewport
                    scrub: 2, // Smooth animation while scrolling
                    markers: false, // Set to true for debugging markers
                    transformOrigin:"center center"
                  },
            });

        })

    return(
        <div className="hidden lg:block flex m-20 items-center justify-center min-h-screen" ref={subHeaderTextOne} >
            <div className="lg:w-full h-full bg-zinc-900 border-2">
                <img className="w-full hidden lg:block" src="Header.gif" ></img>
            </div>
        </div>
    )
}