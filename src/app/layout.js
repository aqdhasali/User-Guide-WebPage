import localFont from "next/font/local";
import "./globals.css";
import CardActivation from "@/components/CardActivation";
import {Inter} from "@next/font/google";
import Header from "@/components/Header";
import ProfileCompletion from "@/components/ProfileCompletion";
import CustomProfile from "@/components/CustomProfile";
import Footer from "@/components/Footer";
import {Poppins} from "@next/font/google";
import ContinueActivation from "@/components/ContinueActivation";
import FinalProfile from "@/components/FinalProfile";


const inter = Inter({
  weight:['400','500','600'],
  subsets:['cyrillic'],
});




export const metadata = {
  title: "User Guidance",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-l` }>
      <meta name = "viewport" content= "width=device-width, initial-scale=1.0" className=""></meta>
        <Header />
        <CardActivation />
        <ContinueActivation />
        <ProfileCompletion />
        <CustomProfile />
        <FinalProfile />
        <Footer />
        
        {children}
      </body>
    </html>
  );
}
