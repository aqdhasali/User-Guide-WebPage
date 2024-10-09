"use client";

import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import {Michroma} from "@next/font/google"

const michroma = Michroma({
    weight:['400'],
    subsets:['latin'],
})

gsap.registerPlugin(useGSAP,ScrollTrigger)

export default function Header(){
    const headerText = useRef()
    const scroll = useRef()
    
    
    useGSAP(
        () => {
            gsap.from('.headerText',
                {duration:1,
                 opacity:0, 
                 scale:0.2, 
                 y:100,
                 ease:"power3.out",
                 transformOrigin:"center center",
                });

            gsap.from(scroll.current,
                {duration: 2,          
                y:200,               
                ease: "power2.out"
            });
        });

    return(
        <div className="flex flex-col justify-between min-h-screen bg-cover bg-radial-gradient bg-center animate-pulseOnce bg-no-repeat sm:bg-auto lg:bg-auto" ref={headerText}>

            <div className="m-5 flex">
                <img className="w-28 lg:w-48" src="logo.svg" alt="Commercial Prime Logo"></img>
            </div>


            <div className="flex flex-col gap-10 items-center justify-center text-center">
                <h1 className={`${michroma.className} uppercase headerText text-4xl lg:text-6xl`}>User Guide</h1>  
                <p className={`${michroma.className} p-4 headerText uppercase text-xs lg:text-sm breakwords`}>Your One Tap Digital Business Card. Follow these steps to successfully<br></br>activate your card. </p>      
            </div>
            
          
            <div className="flex justify-between ml-10 mr-10 items-center " ref={scroll}>

                <div className="mb-20 lg:mb-0  w-20 lg:32 h-10 border-2 border-white hover:bg-zinc-900 rounded-md flex items-center justify-center rounded-md hover:bg-zinc-900 transition duration-300">
                    <h3 className="tracking-tight text-md">Login</h3>
                </div>

                <div className="scroll flex flex-col items-center justify-center mb-20" ref={scroll}>
                    <div className="text-xs tracking-widest uppercase">scroll</div>
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25a.75.75 0 0 0-1.5 0v4.69L6.03 8.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8.75 9.44V4.75Z" clip-rule="evenodd" />
                    </svg>
                </div>


                <div className="mb-20 lg:mb-0 w-20 lg:32 h-10 border-2 border-white  rounded-md flex items-center justify-center rounded-md hover:bg-zinc-900 transition duration-300" ref={scroll}>
                        <h3 className="tracking-tight text-md">Website</h3>
                </div>

            </div>
        </div>

    )
        
}