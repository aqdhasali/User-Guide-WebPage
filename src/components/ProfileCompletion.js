import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });

export default function ProfileCompletion(){
    return (
        <div className="m-10 mt-10 min-h-screen">
            <div className="flex flex-col sm:flex-col lg:flex-row  lg:justify-start lg:items-start lg:text-left  text-center gap-x-10">
                <div>
                    <h1 className="text-8xl font-bold">03</h1>
                </div>
          
                <div className="mt-4 text-center lg:text-left">
                    <h2 className="tracking-tight text-2xl font-semibold">Complete Your Profile</h2>
                    <h3 className="tracking-tight text-xl">Enhance your experience by completing your profile.</h3>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row">
                <div>
                    <img className="w-96 max-w-3xl rounded-lg shadow-lg"
                    autoPlay
                    // loop
                    muted
                    src="/4.gif" alt="card tap video"></img>
                </div>

                <div className="w-auto sm:w-1/2 tracking-tight mt-28 p-10 container items-center breakwords border hover:border-slate-600 transition duration-300 rounded bg-neutral-900 flex flex-col h-full justify-center ">
                    <p className="text-sm"> A complete profile helps personalize your interaction, ensures smooth communication, and unlocks access to all features. <br></br><br></br><br></br>
                    Follow these quick steps to fill in your details and get the most out of your account!<br></br><br></br>
                    </p>
                </div>
            </div>


        </div>
    )
}


