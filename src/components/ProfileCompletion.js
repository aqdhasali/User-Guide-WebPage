import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });

export default function ProfileCompletion(){
    return (
        <div>
            <div className="flex flex-row ">
                <div>
                    <h1 className="text-8xl font-bold">03</h1>
                </div>
                <span className="pr-5"></span>
                <div className="mt-4">
                    <h2 className="tracking-tight text-2xl font-semibold">Complete Your Profile</h2>
                    <h3 className="tracking-tight text-xl">Enhance your experience by completing your profile.</h3>
                </div>
            </div>

            <div className="flex">
                <div>
                    <video className="w-2/3 max-w-3xl rounded-lg shadow-lg"
                    autoPlay
                    // loop
                    muted
                    src="/4.mp4" alt="card tap video"></video>
                </div>

                <div className="tracking-tight mt-28 p-10 container items-center breakwords w-1/2 border hover:border-slate-600 transition duration-300 rounded bg-neutral-900 flex flex-col h-full justify-center ">
                    <p className="text-sm"> A complete profile helps personalize your interaction, ensures smooth communication, and unlocks access to all features. <br></br><br></br><br></br>
                    Follow these quick steps to fill in your details and get the most out of your account!<br></br><br></br>
                    </p>
                </div>
            </div>


        </div>
    )
}


// <div className="mt-10 container flex flex-col lg:flex-row flex-shrink-0 items-center">
//             <div className="w-full">
//                 <h1 className={`${michroma.className} text-xl text-center md:text-base md:text-left` }>Continue to Activation</h1>
//                 <img className="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-y-100 duration-300" src="./continue.png" alt="continue activation image"></img>
//                 <p className=" tracking-tighter pl-14 text-sm">Click 'Register' to successfully complete your registration.</p>
                
//             </div>
//             <span className="p-5"></span>

//             <div className="w-full">
//                 <h1 className={`${michroma.className} text-xl text-center md:text-base md:text-left`}>Complete Your Profile</h1>
//                 <img className="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-y-100 duration-300" src="./completion.png" alt="complete profile activation image"></img>
//             </div>
//         </div>