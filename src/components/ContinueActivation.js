export default function ContinueActivation(){
    return(
        <div className="h-screen">
            <div className="flex flex-row items-center justify-end">
                <div className="mt-4">
                        <h2 className="tracking-tight text-2xl font-semibold">Continue Activation</h2>
                        <h3 className="tracking-tight text-xl">Continue to activation to finalize your registration process.</h3>
                </div>

                <span className="pr-5"></span>

                <div>
                    <h1 className="text-8xl font-bold">02</h1>
                </div>
            </div>


            <div className="flex flex-row">
                <div>
                    <video className="w-2/3 max-w-3xl rounded-lg shadow-lg"
                        autoPlay
                        // loop
                        muted
                        src="/3.mp4" alt="card tap video">
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