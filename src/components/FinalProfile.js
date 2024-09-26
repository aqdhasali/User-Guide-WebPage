export default function FinalProfile(){
    return(
        <div className="h-screen  bg-contain bg-center bg-radial-gradient bg-no-repeat">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <h2 className="tracking-tight tracking-tighter text-center text-3xl font-semibold bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent ">You're Ready To Go</h2>
                    <h3 className="tracking-tighter text-center text-xl font-semibold bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent">Now Simply Tap Your Phone On Your Visitor's Phone</h3>
                </div>

                <div className="flex items-center justify-center">
                    <img className="w-2/3 h-full max-w-3xl rounded-lg"
                                autoPlay
                                // loop
                                muted
                               src="/6.gif" alt="card tap video">
                    </img>
                </div>
            </div>
        </div>
    )
}