import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });

export default function CardActivation(){
    return(
        <div className="min-h-screen m-10">
            <div className="flex flex-col gap-x-10 justify-center items-center lg:justify-start lg:items-start lg:text-left sm:flex-row sm:items-center sm:justify-center">
                <div>
                    <h1 className="text-8xl font-bold">01</h1>
                </div>
                
                <div className="mt-4 text-center sm:text-left ">
                    <h2 className="tracking-tight text-2xl font-semibold">Card Activation</h2>
                    <h3 className="tracking-tight text-xl">You can choose either two of these options two successfully activate your card.</h3>
                </div>
            </div>

{/* create seperate divs for video and content */}


            <div className="flex flex-col  md:flex-row md:items-center md:justify-center gap-10 sm:flex-col sm:items-center sm:justify-center mt-10">
                {/* Image One  */}
                <div className="flex flex-col sm:flex-row items-center justify-center">
                    
                    <img className="w-96 max-w-3xl rounded-lg shadow-lg"
                    autoPlay
                    muted
                    src="/1.gif" alt="card tap video"></img>
                    

                    <div className="w-auto tracking-tight mt-12 p-5 container items-center breakwords w-2/4  border hover:border-slate-600 transition duration-300 rounded bg-neutral-900 flex flex-col h-full justify-center ">
                        <p className="text-sm">Activate your card by tapping it against your phone. <br></br><br></br>

                        This uses NFC technology. For Apple phones (iPhone 8 onwards), tap near the front camera.<br></br><br></br>

                        For Android, tap on the back. If NFC isn't working, turn it on in settings.
                        </p>
                    </div>
                </div>

                {/* Image Two */}

                <div className="flex flex-col sm:flex-row justify-center items-center">
                
                    <img className="w-96 max-w-3xl rounded-lg shadow-lg"
                    autoPlay
                    // loop
                    muted
                    src="/2.gif" alt="card tap video"></img>
                    

                    <div className="w-auto tracking-tight mt-12 p-5 container items-center breakwords  border hover:border-slate-600 transition duration-300 rounded bg-neutral-900 flex flex-col h-full justify-center ">
                        <p className="text-sm">Activate your card by tapping it against your phone. <br></br><br></br>

                        This uses NFC technology. For Apple phones (iPhone 8 onwards), tap near the front camera.<br></br><br></br>

                        For Android, tap on the back. If NFC isn't working, turn it on in settings.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )


}


{/* <div className="mt-10">
            <h1 className={`${michroma.className} text-xl text-center md:text-base md:text-left`}>Card Activation</h1>

            <div className="mt-10 flex flex-col lg:flex-row flex-shrink-0">
                <div className="container p-5 border rounded bg-neutral-900 flex lg:flex-row flex-col md:flex-col items-center md:items-center md:p-4 w-full hover:bg-neutral-700 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    
                  <img className = "w-48 md:48 sm:48" src="/phone-card.png" alt="phone card image"></img>
                
                  <p className="tracking-tighter m-5 pr-0.5 text-center breakwords text-lg md:text-sm ">
                    Activate your card by <span className="text-yellow">tapping</span> it against your phone. <br></br><br></br>
                    This uses NFC technology. For Apple phones (iPhone 8 onwards), tap near the front camera.<br></br><br></br>
                    For Android, tap on the back. If <span className="text-yellow">NFC</span> isn't working, turn it on in settings.
                  </p>
                    
                    
                </div>

                <span className="m-2"></span>
            
                <div className="container p-5 border rounded bg-neutral-900 flex lg:flex-row flex-col md:flex-col items-center md:items-center md:p-4 w-full hover:bg-neutral-700 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
                    <img className="w-48 md:48 sm:48"  src="/phone-scanner.png" alt="phone scanner image"></img>
                    <p className="tracking-tighter m-5 pr-0.5 text-center breakwords">
                        Activate your card by scanning its <span className="text-yellow">QR code</span>.<br></br><br></br>
                        Use this option on phones that don't support <span className="text-yellow">NFC reading</span>.
                    </p>
                </div>

            </div>
            
        </div> */}