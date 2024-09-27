export default function ContinueActivation(){
    return(
        <div className="min-h-screen m-10">
            <div className="mt-10 flex flex-col sm:flex-col lg:flex-row gap-10  items-center justify-end">
                <div>
                    <h1 className="text-8xl font-bold">02</h1>
                </div>

                <div className="mt-4 lg:text-left text-center sm:text-center">
                        <h2 className="tracking-tight text-2xl font-semibold">Continue Activation</h2>
                        <h3 className="tracking-tight text-xl">Continue to activation to finalize your registration process.</h3>
                </div>

                
            </div>


            <div className="flex flex-col sm:flex-row">
                <div>
                    <img className="w-96 max-w-3xl rounded-lg shadow-lg"
                        autoPlay
                        // loop
                        muted
                        src="/3.gif" alt="card tap video">
                    </img>
                </div>


                <div className="tracking-tight mt-28 p-10 container  breakwords w-auto sm:w-1/2 border hover:border-slate-600 transition duration-300 rounded bg-neutral-900 flex flex-col h-full justify-center items-center lg:justify-end lg:items-end ">
                    <p className="text-sm">Once you completed your registration you’re almost good to go. <br></br><br></br><br></br>
                    But Hang On! There few more steps to finish setting up your profile. <br></br><br></br><br></br>
                    </p>
                </div>
            </div>



        </div>
    )
}