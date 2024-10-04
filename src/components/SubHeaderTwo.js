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
    const subHeaderTextTwo = useRef()
    
    
    useGSAP(
        () => {
            gsap.from(subHeaderTextTwo.current,{
                duration:2, 
                opacity:0, 
                scale:0.5, 
                ease:"power2.inOut",
                scrollTrigger: {
                    trigger: subHeaderTextTwo.current, // Trigger when this element scrolls into view
                    start: "top 100%", // When the top of the element is 80% down the viewport
                    end:"bottom 20%",
                    scrub: 3, // Smooth animation while scrolling
                    markers: false, // Set to true for debugging markers
                    transformOrigin:"center center"
                  },
            });

        })

    return(
        <div className="flex items-center justify-center min-h-screen bg-radial-gradient-md bg-center bg-contain animate-pulse bg-no-repeat" >
            <h2 className={`${poppins.className} subHeaderTextTwo tracking-tighter text-center text-4xl lg:text-3xl font-semibold bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent break-words`} ref={subHeaderTextTwo}></h2>
        </div>
    )
}


// export default function SubHeaderTwo(){
//     const subHeaderTextTwo = useRef()
//     const containerRef = useRef()

    
//     useGSAP(
//         () => {
//             gsap.from(subHeaderTextTwo.current,
//                 {duration:2, 
//                 opacity:0, 
//                 scale:0.2, 
//                 ease:"power2.inOut",
//                     scrollTrigger: {
//                         trigger: subHeaderTextTwo.current, // Trigger when this element scrolls into view
//                         start: "top 70%", // When the top of the element is 80% down the viewport
//                         end:"bottom 30%",
//                         scrub: 3, // Smooth animation while scrolling
//                         markers: false, // Set to true for debugging markers
//                         transformOrigin:"center center"
//                       },
//                 }
//             );
//         })


//     return(
    
//         <div className="flex items-center justify-center min-h-screen bg-radial-gradient-md bg-center bg-contain animate-pulse bg-no-repeat" >
//             <h2 className= {`${poppins.className} subHeaderTextTwo tracking-tighter text-center text-3xl font-semibold text-4xl lg:text-3xl bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent break-words ` } ref={subHeaderTextTwo}>Follow these steps to successfully<br></br>activate your card.</h2>
//         </div>
       
     
        
//     )
// }