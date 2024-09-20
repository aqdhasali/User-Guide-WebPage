import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });

export default function ProfileCompletion(){
    return (
        <div className="mt-10 container flex flex-col lg:flex-row flex-shrink-0 items-center">
            <div className="w-full">
                <h1 className={`${michroma.className} text-xl text-center md:text-base md:text-left` }>Continue to Activation</h1>
                <img className="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-y-100 duration-300" src="./continue.png" alt="continue activation image"></img>
                <p className=" tracking-tighter pl-14 text-sm">Click 'Register' to successfully complete your registration.</p>
                
            </div>
            <span className="p-5"></span>

            <div className="w-full">
                <h1 className={`${michroma.className} text-xl text-center md:text-base md:text-left`}>Complete Your Profile</h1>
                <img className="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-y-100 duration-300" src="./completion.png" alt="complete profile activation image"></img>
            </div>
        </div>
    )
}