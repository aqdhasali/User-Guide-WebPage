import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });

export default function Footer(){
    return(
        <div className="m-10 flex flex-col lg:flex-row">

            <div className="flex-grow">
                <div className="flex flex-col gap-y-10 ">
                    <h2 className="text-5xl bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent">Trust-Quality-Dignity<br></br>-Connected</h2>
                    <h3>Want to learn more about us?Discover<br></br> our story and mission by clicking below!</h3>
                    <div className="flex gap-x-5">
                        
                    </div>
                </div>
            </div>

            <div className="flex items-end justify-end lg:ml-10 animate-pulse">
                    <img className="w-full lg:w-96" src="/footer-bg.svg" alt="footer background"></img>
            </div>
            
            

            

          


        </div>
        
    )
}


{/* <div className="mt-20 flex items-center justify-between flex-shrink-0 text-center md:text-base md:text-left">

<div className="w-1/5 flex justify-start opacity-25">
    <img className="w-full h-full" src="./logo.png"></img>
</div>

<div className="justify-center w-4/5 flex flex-col gap-y-2 items-center">
    <h2 className={`${michroma.className} text-lg text-center`}>Trust<span className="text-yellow"> - Quality - </span>Dignity<span className="text-yellow"> - Connected</span></h2>
    <img className="w-48" src="./word-logo.png" alt="text-logo"></img>
    <p className="text-center">www.commercialprime.co.uk</p>
</div>

</div> */}