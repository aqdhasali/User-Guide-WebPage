import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });

export default function CardActivation(){
    return(
        <div className="mt-10">
            <h1 className={`${michroma.className} text-xl`}>Card Activation</h1>

            <div className="mt-10 flex">
                <div className="container p-5 border rounded bg-neutral-900 flex w-1/2 hover:bg-neutral-700  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <img className = "w-48 " src="/phone-card.png" alt="phone card image"></img>
                    <p className="tracking-tighter m-5">Activate your card by <span className="text-yellow">tapping</span> it against your phone. <br></br><br></br>

                        This uses NFC technology. For Apple phones (iPhone 8 onwards), tap near the front camera.<br></br><br></br>

                        For Android, tap on the back. If <span className="text-yellow">NFC</span> isn't working, turn it on in settings.
                    </p>
                </div>

                <span className="m-2"></span>
            

                <div className="container p-5 border rounded bg-neutral-900 flex w-1/2 hover:bg-neutral-700 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <img className="w-48"  src="/phone-scanner.png" alt="phone scanner image"></img>
                    <p className="tracking-tighter m-5 pr-0.5">
                        Activate your card by scanning its <span className="text-yellow">QR code</span>.<br></br><br></br>
                        Use this option on phones that don't support <span className="text-yellow">NFC reading</span>.
                    </p>
                </div>

            </div>
            
        </div>
    )


}
