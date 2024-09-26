import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });

export default function Footer(){
    return(
        <div className="flex flex-row mt-20 h-screen">
            <div className="mt-20 flex flex-col gap-y-10">
                <h2 className="text-5xl bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent">Trust-Quality-Dignity<br></br>-Connected</h2>
                <h3>Want to learn more about us?Discover<br></br> our story and mission by clicking below!</h3>
                <div className="flex gap-x-5">
                    <div className="w-20 h-10 bg-white flex items-center justify-center rounded-md">
                        <h3 className="tracking-tight text-slate-800 text-md text-center"><a href="https://app.primeq.co/">Login</a></h3>
                    </div>
                    <div className="bg-white w-20 flex items-center justify-center rounded-md">
                        <h3 className="tracking-tight text-slate-800 text-md"><a href="https://commercialprime.co.uk/">Website</a></h3>
                    </div>
                </div>
            </div>

            <div className="bg-right-top animate-pulse bg-contain bg-footer-bg bg-no-repeat w-screen h-full">

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