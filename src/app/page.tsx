import Image from "next/image";
import Navbar from './components/Navbar'; // Adjust path if necessary
import Hero from "./components/Hero";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div className="bg-[#043873]">
   <Navbar/>
   <Hero />
   <Footer />
   </div>
 

  
  );
}
