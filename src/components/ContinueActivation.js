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
                        start: "top 60%", // When the top of the element is 80% down the viewport
                        end:"bottom 40%",
                        scrub: 3, // Smooth animation while scrolling
                        markers: false, // Set to true for debugging markers
                      },
                }
            );


            // gsap.from(cardContainer2.current,{
            //     duration:2, 
            //     opacity:0, 
            //     scale:0.5, 
            //     ease:"back",
            //     scrollTrigger: {
            //         trigger: cardContainer2.current, // Trigger when this element scrolls into view
            //         start: "top 100%", // When the top of the element is 80% down the viewport,
            //         end:"bottom 20%",
            //         scrub: 3, // Smooth animation while scrolling
            //         markers: false, // Set to true for debugging markers
            //       },
            // });

        })
    return(
        <div className="min-h-screen m-10">
            <div className="cardContainer2 mt-10 flex flex-col sm:flex-col lg:flex-row gap-10  items-center justify-end" ref={cardContainer2}>
                <div>
                    <h1 className="text-8xl font-bold">02</h1>
                </div>

                <div className=" mt-4 lg:text-left text-center sm:text-center" >
                        <h2 className="tracking-tight text-2xl font-semibold">Continue Activation</h2>
                        <h3 className="tracking-tight text-xl">Continue to activation to finalize your registration process.</h3>
                </div>

                
            </div>


            <div className="flex flex-col sm:flex-row items-stretch">
                <div>
                    <img className="w-full h-full max-w-5xl rounded-lg shadow-lg"
                        autoPlay
                        // loop
                        muted
                        src="/3.gif" alt="card tap video">
                    </img>
                </div>


                <div className="tracking-tight mt-28 p-10 container  breakwords w-auto sm:w-1/2 border hover:border-slate-600 transition duration-300 rounded bg-neutral-900 flex flex-col h-full justify-center items-center  ">
                    <p className="text-sm">Once you completed your registration you’re almost good to go. <br></br><br></br><br></br>
                    But Hang On! There few more steps to finish setting up your profile. <br></br><br></br><br></br>
                    </p>
                </div>
            </div>



        </div>
    )
}