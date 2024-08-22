import Image from "next/image";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen">
      <img className="absolute left-0"  src="/gradien.svg" alt="" />
      <img className="absolute bottom-[-300px] right-0"  src="/gradien-2.svg" alt="" />
      <Nav/>
      <Hero/>
      <About/>
    </main>
  );
}

{/* <Image
className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
src="/next.svg"
alt="Next.js Logo"
width={180}
height={37}
priority
/> */}