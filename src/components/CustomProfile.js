import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });

export default function CustomProfile(){
    return(
        <div className="mt-10 flex flex-col md:flex-row flex-shrink-0">
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
        </div>
    )
}