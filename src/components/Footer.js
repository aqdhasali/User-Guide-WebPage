import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });

export default function Footer(){
    return(
        <div className="mt-20 flex items-center justify-between flex-shrink-0 text-center md:text-base md:text-left">

            <div className="w-1/5 flex justify-start opacity-25">
                <img className="w-full h-full" src="./logo.png"></img>
            </div>

            <div className="justify-center w-4/5 flex flex-col gap-y-2 items-center">
                <h2 className={`${michroma.className} text-lg text-center`}>Trust<span className="text-yellow"> - Quality - </span>Dignity<span className="text-yellow"> - Connected</span></h2>
                <img className="w-48" src="./word-logo.png" alt="text-logo"></img>
                <p className="text-center">www.commercialprime.co.uk</p>
            </div>
           
        </div>
        
    )
}