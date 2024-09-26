import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });

export default function CustomProfile(){
    return(
        <div>
            <div className="flex flex-row items-center justify-end">
                <div className="mt-4">
                        <h2 className="tracking-tight text-2xl font-semibold">Complete Your Profile</h2>
                        <h3 className="tracking-tight text-xl">Enhance your experience by completing your profile.</h3>
                </div>

                <span className="pr-5"></span>

                <div>
                    <h1 className="text-8xl font-bold">04</h1>
                </div>
            </div>


            <div className="flex flex-row">
                <div>
                    <video className="w-2/3 max-w-3xl rounded-lg shadow-lg"
                        autoPlay
                        // loop
                        muted
                        src="/5.mp4" alt="card tap video">
                    </video>
                </div>


                <div className="tracking-tight mt-28 p-10 container items-center breakwords w-1/2 border hover:border-slate-600 transition duration-300 rounded bg-neutral-900 flex flex-col h-full justify-center ">
                    <p className="text-sm">Once you completed your registration you’re almost good to go. <br></br><br></br><br></br>
                    But Hang On! There few more steps to finish setting up your profile. <br></br><br></br><br></br>
                    </p>
                </div>
            </div>

        </div>
    )
}


{/* <div className="mt-10 flex flex-col md:flex-row flex-shrink-0">
            <div className="w-full mt-10">
                <h1 className={`${michroma.className} text-lg text-center md:text-base md:text-left`}>Add Custom Fields</h1>
                <img className="pt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-y-100 duration-300" src="./custom.png" alt="add custom fields image"></img>
                <p className="tracking-tighter text-sm">
                    You have eligibility to add any content link as you prefer<br></br>
                    1: Add Icon
                    2: Enter Field Name
                    3: Enter Field Content 4: Click Save
                </p>
            </div>

            <div className="w-full mt-10">
                <h1 className={`${michroma.className} text-lg text-yellow text-center md:text-base md:text-left`}>Everything is ready to go!</h1>
                <h2 className={`${michroma.className} text-lg text-center md:text-base md:text-left`}>Simply tap your card on to your visitor's phone </h2>
                <img className="pt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-y-100 duration-300" src="./completed-profile.png" alt="completed profile image"></img>
            </div>
        </div> */}