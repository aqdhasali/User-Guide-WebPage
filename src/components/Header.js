import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:'400',
    subsets:['latin'],
  });


export default function Header(){
    return(
        <>
            <h1 className={`${michroma.className} text-4xl`}>User Guide</h1>
            <h3 className="text-yellow">One Tap Connect Digital Business Card </h3>
        
        </>
        )
        
}