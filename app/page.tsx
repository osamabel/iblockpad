import Image from "next/image";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen">
      <Nav/>
      <div className="w-[1128px] h-full relative bg-slate-700">
        <div className="min-w-[96px] absolute right-0 h-full pt-[150px] flex flex-col items-center bg-emerald-300">
          <div className="circle"></div>
          <div className="path"></div>
        </div>
        <div className="">
          <Hero/>
          <About/>
          {/* <About/>
          <About/> */}
        </div>
      </div>
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