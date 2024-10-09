import {Michroma} from "@next/font/google";

const michroma = Michroma({
    weight:['400'],
    subsets:['latin'],
  });

export default function Footer(){
    return(
        <div className="m-20 flex flex-col">
            <div className="flex-grow">
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className={`${michroma.className} uppercase headerText text-center text-md lg:text-2xl `}>Trust-Quality-Dignity-Connected</h1>  
                    <p className={`${michroma.className} text-xs lg:text-sm text-center`}>Want to learn more about us? Discover our story and mission by clicking below!</p>
                    <img className="mt-3 w-48" src="logo.svg"></img>


                    <div className="mt-20">
                        <h2 className="text-center">Socials</h2>
                        <div className="flex gap-2 text-neutral-500">
                            <div className="flex gap-2 ">
                                <svg cxmlns="http://www.w3.org/2000/svg" width="1em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
                                <span><a href="https://web.facebook.com/commercialprime?_rdc=1&_rdr">Facebook</a></span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                                <span><a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFRfHkq-TBR-AAAAZJvk8wQtZPY11hPBZRpfEfBZ8XOqEBqTZVn5ox0Iq37BH1M4rJwOSq8w_av9J6eBafnhb1SlvRUVH5xn0qIF_gRdtmwGPI8xQSAfxoFxu1Kk7vdFok2Dhs=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fcommercial-prime">LinkedIn</a></span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                                <span><a href="https://www.instagram.com/commercial_prime/">Instagram</a></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

