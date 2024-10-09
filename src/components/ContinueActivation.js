"use client";


import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(useGSAP,ScrollTrigger)


export default function ContinueActivation(){
    const cardContainer2 = useRef()
    
    useGSAP(
        () => {
            gsap.from(cardContainer2.current,
                {duration:1, 
                opacity:0, 
                scale:0.2, 
                ease:"power2.inOut",
                    scrollTrigger: {
                        trigger: cardContainer2.current, // Trigger when this element scrolls into view
                        start: "top 70%", // When the top of the element is 80% down the viewport
                        end:"bottom 30%",
                        scrub: 3, // Smooth animation while scrolling
                        markers: false, // Set to true for debugging markers
                      },
                }
            );

        })
    return(
        <div className="min-h-screen m-10">
            <div className="cardContainer2 mt-10 flex flex-col sm:flex-col lg:flex-row gap-10  items-center justify-end" ref={cardContainer2}>
                <div>
                    <h1 className="text-8xl font-bold">02</h1>
                </div>

                <div className=" mt-4 lg:text-left text-center sm:text-center" >
                        <h2 className="tracking-tight text-2xl font-semibold">Continue Activation</h2>
                        <h3 className="tracking-tight text-xl">Finalise your registration </h3>
                </div>

                
            </div>


            <div className="flex flex-col sm:flex-row items-stretch">
                <div>
                    <img className="w-full lg:w-3/4 max-w-5xl rounded-lg shadow-lg"
                        autoPlay
                        // loop
                        muted
                        src="/3.gif" alt="card tap video">
                    </img>
                </div>


                <div className="flex flex-col gap-5 tracking-tight mt-20 p-10 container  breakwords w-auto sm:w-1/2 border hover:border-slate-600 transition duration-300 rounded bg-neutral-900 flex flex-col h-full justify-center items-center  ">
                    <span className="text-sm">Complete the activation process by setting a strong password and filling in the required fields.</span>
                    <span className="text-sm">Once registered, you’re almost ready to go—but hold on! There are a few more steps to fully set up your profile.</span>
                </div>
            </div>



        </div>
    )
}