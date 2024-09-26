import {Poppins} from "@next/font/google";

const poppins = Poppins({
    weight:['200','400', '600','900'],
    subsets:['latin'],
  });

export default function Header(){
    return(
        <div className="flex items-center justify-center text-center h-screen bg-cover bg:auto bg-radial-gradient bg-center animate-pulse bg-no-repeat sm:scale-100 lg:scale-90">
            <h1 className={`${poppins.className} text-4xl lg:text-8xl sm:text-5xl md:text-6xl animate-grow`}>User Guide</h1>        
        </div>
        
        )
        
}