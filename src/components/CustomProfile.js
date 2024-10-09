"use client";

import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(useGSAP,ScrollTrigger)


export default function CustomProfile(){
    const cardContainer4 = useRef()
    
    useGSAP(
        () => {
            gsap.from('.cardContainer4',{
                duration:1, 
                opacity:0, 
                scale:0.2, 
                ease:"power2.inOut",
                scrollTrigger: {
                    trigger: cardContainer4.current, // Trigger when this element scrolls into view
                    start: "top 80%",
                    end:"20%", // When the top of the element is 80% down the viewport
                    scrub: 3, // Smooth animation while scrolling
                    markers: false, // Set to true for debugging markers  
                  },
            });
        })


    return(
        <div className="min-h-screen mt-20 m-10">
            <div className="cardContainer4 mt-10 flex flex-col sm:flex-col lg:flex-row gap-10  items-center justify-end" ref={cardContainer4}>
                <div>
                    <h1 className="text-8xl text-center lg:text-left font-bold">04</h1>
                </div>

                <div className="flex flex-col sm:flex-col lg:flex-row  items-center justify-end gap-x-10">
                    <div className="mt-4 text-center lg:text-left">
                            <h2 className="tracking-tight text-2xl font-semibold">Customise Your Profile</h2>
                            <h3 className="tracking-tight text-xl">Tailor your shareable link</h3>
                    </div>
                </div>
            </div>
             


            <div className="flex flex-col lg:flex-row">
                <div>
                    <img className="w-full lg:w-3/4 max-w-3xl rounded-lg shadow-lg"
                        autoPlay
                        // loop
                        muted
                        src="/5.gif" alt="card tap video">
                    </img>
                </div>


                <div className="flex flex-col gap-5 w-auto sm:w-1/2 lg:mt-28 tracking-tight p-10 container items-center breakwords w-1/2 border hover:border-slate-600 transition duration-300 rounded bg-neutral-900 flex flex-col h-full justify-center ">
                    <span className="text-sm">Add your preferred social media accounts and customise how your shareable link will appear.</span>
                    <span className="text-sm">This allows you to stay connected with visitors online and enhance your networking experience.</span>
                    <span>Steps To Follow</span>
                    <div className="flex gap-2 bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent">
                        <span className="text-sm">1. Select Icon</span>
                        <span className="text-sm"> - </span>
                        <span className="text-sm">2. Add Field Name</span>
                        <span className="text-sm"> - </span>
                        <span className="text-sm">3. Add Field Content</span>
                        <span className="text-sm"> - </span>
                        <span className="text-sm">4. Click Save</span>
                    </div>
                </div>
            </div>

        </div>
    )
}


