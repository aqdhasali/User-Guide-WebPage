import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });

export default function CustomProfile(){
    return(
        <div className="mt-10 min-h-screen m-10 ">
            <div className="mt-10 flex flex-col sm:flex-col lg:flex-row gap-10  items-center justify-end">
                <div>
                    <h1 className="text-8xl text-center lg:text-left font-bold">04</h1>
                </div>

                <div className="flex flex-col sm:flex-col lg:flex-row  items-center justify-end gap-x-10">
                    <div className="mt-4 text-center lg:text-left">
                            <h2 className="tracking-tight text-2xl font-semibold">Customise Your Profile</h2>
                            <h3 className="tracking-tight text-xl">Enhance your experience by completing your profile.</h3>
                    </div>
                </div>
            </div>
             


            <div className="flex flex-col lg:flex-row">
                <div>
                    <img className="w-96 max-w-3xl rounded-lg shadow-lg"
                        autoPlay
                        // loop
                        muted
                        src="/5.gif" alt="card tap video">
                    </img>
                </div>


                <div className="w-auto sm:w-1/2 lg:mt-20 tracking-tight p-10 container items-center breakwords w-1/2 border hover:border-slate-600 transition duration-300 rounded bg-neutral-900 flex flex-col h-full justify-center ">
                    <p className="text-sm">You have the eligibility to add any of your socials here as you prefer. <br></br><br></br><br></br>
                    Therefore, You can stay connected with your visitors online as well. <br></br><br></br><br></br>
                    </p>
                </div>
            </div>

        </div>
    )
}


