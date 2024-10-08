"use client";

import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import {Michroma} from "@next/font/google"
import {Poppins} from "@next/font/google"

const michromaFont = Michroma({
    weight:['400'],
    subsets:['latin'],
})



gsap.registerPlugin(useGSAP,ScrollTrigger)


export default function FinalProfile(){
    const finalHeader = useRef()
    useGSAP(
        () => {
            gsap.from('.finalHeader',{
                duration:1, 
                opacity:0, 
                scale:0.2, 
                ease:"power2.inOut",
                scrollTrigger: {
                    trigger: finalHeader.current, // Trigger when this element scrolls into view
                    start: "top 70%",
                    end:"30%", // When the top of the element is 80% down the viewport
                    scrub: 3, // Smooth animation while scrolling
                    markers: false, // Set to true for debugging markers  
                  },
            });
        })
    return(
        <div className="bg-contain bg-center bg-radial-gradient bg-no-repeat m-10">
            <div className="flex flex-col justify-center items-center">
                <div className="finalHeader" ref={finalHeader}>
                    <p className={`${michromaFont.className}  text-center text-md lg:text-4xl font-bold  bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent `}>You're Ready To Go</p>
                    <h3 className={`${michromaFont.className}  text-center text-sm lg:text-xl font-semibold bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent`}>Now Simply Tap Your Phone On Your Visitor's Phone</h3>
                </div>

                <div className="flex items-center justify-center">
                    <img className="lg:w-110 w-full h-2/4 max-w-3xl rounded-lg"
                                autoPlay
                                // loop
                                muted
                               src="/6.gif" alt="card tap video">
                    </img>
                </div>
            </div>
        </div>
    )
}