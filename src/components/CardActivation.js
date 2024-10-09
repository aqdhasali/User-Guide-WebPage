"use client";

import {Michroma} from "@next/font/google";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP,ScrollTrigger)

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });

export default function CardActivation(){
    const cardContainer = useRef()
    
    useGSAP(
        () => {
            gsap.from('.cardContainer',{
                duration:1, 
                opacity:0, 
                scale:0.2, 
                ease:"power2.Out",
                scrollTrigger: {
                    trigger: cardContainer.current, // Trigger when this element scrolls into view
                    start: "top 70%",
                    end:"30%", // When the top of the element is 80% down the viewport
                    scrub: 3, // Smooth animation while scrolling
                    markers: false, // Set to true for debugging markers
                   
                  },
            });

        })

    return(
        <div className="min-h-screen m-10">
            <div  ref={cardContainer}  className="cardContainer flex flex-col gap-x-10 justify-center items-center lg:justify-start lg:items-start lg:text-left sm:flex-row sm:items-center sm:justify-center">
                <div>
                    <h1 className="text-8xl font-bold">01</h1>
                </div>
                
                <div className="mt-4 text-center sm:text-left ">
                    <h2 className="tracking-tight text-2xl font-bold">Card Activation</h2>
                    <h3 className="tracking-tight text-xl">You have two options to successfully activate your card:</h3>
                </div>
            </div>

{/* create seperate divs for video and content */}


            <div className="flex flex-col  md:flex-row md:items-center md:justify-center gap-5 sm:flex-col sm:items-center sm:justify-center mt-10">
                {/* Image One  */}
                <div className="flex flex-col sm:flex-row items-center justify-center">
                    
                    <img className=" w-96 max-w-3xl rounded-lg shadow-lg"
                    autoPlay
                    muted
                    src="/1.gif" alt="card tap video"></img>
                    

                    <div className="flex flex-col gap-5 w-auto lg:w-64 h-72 tracking-tight mt-12 p-5 container items-center breakwords  border hover:border-slate-600 transition duration-300 rounded bg-neutral-900 flex flex-col h-full justify-center ">
                        <span className="text-md font-medium" >Tap & Activate</span>
                        <span className="text-sm">Activate your card by tapping it against your phone.</span>
                        <span className="text-sm"> - For Apple phones (iPhone 8 and newer), tap near the front camera.</span>
                        <span className="text-sm"> - For Android phones, tap on the back of the phone.</span>
                        <span className="text-sm">If NFC is not working, ensure it is enabled in your phone settings.</span>
                    </div>
                </div>

            
                {/* Image Two */}

                <div className="flex flex-col sm:flex-row justify-center items-center">
                
                    <img className="w-96 max-w-3xl rounded-lg shadow-lg"
                    autoPlay
                    // loop
                    muted
                    src="/2.gif" alt="card tap video"></img>
                    

                    <div className=" flex flex-col w-auto gap-10 lg:w-64 h-80 tracking-tight mt-12 p-5 container items-center  border hover:border-slate-600 transition duration-300 rounded bg-neutral-900 flex flex-col h-full justify-center ">
                        <span className="text-md font-medium" >Scan & Activate</span>
                        <div className="flex flex-col gap-5 ">
                            <span className="text-sm">Activate your card by scanning its QR code</span>
                            <span className="text-sm"> - This option is available for phones that do not support NFC. </span>
                            <span className="text-sm"> - Simply open your camera, scan the QR code, and follow the prompts.</span>
                        </div>
                          
                    </div>

                </div>
            </div>
        </div>
    )
}