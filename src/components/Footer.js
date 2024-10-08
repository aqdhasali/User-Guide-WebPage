import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:['400'],
    subsets:['latin'],
  });

export default function Footer(){
    return(
        <div className="m-20 flex flex-col">
            <div className="flex-grow">
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className={`${michroma.className} uppercase headerText text-center text-md lg:text-2xl bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent`}>Trust-Quality-Dignity-Connected</h1>  
                    <p className={`${michroma.className} text-xs lg:text-sm text-center`}>Want to learn more about us? Discover our story and mission by clicking below!</p>
                    <img className="mt-3 w-48" src="logo.svg"></img>

                    <div className="mt-20">
                        <h2 className="text-center">Socials</h2>
                        <div className="flex gap-2 text-neutral-500">
                            <span>Facebook</span>
                            <span>LinkedIn</span>
                            <span>Instagram</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

