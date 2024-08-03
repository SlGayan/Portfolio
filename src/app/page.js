import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Container } from "postcss";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col bg-[#121212]  ">
      <Navbar/>
     <div className="container mx-auto mt-24 py-4 px-12">
      
      <HeroSection/>
    </div>
    </main>
  );
}
