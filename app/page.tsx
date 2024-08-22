import Image from "next/image";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import ScrollBySteps from "./components/ScrollBySteps";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen relative">
       <ScrollBySteps />
      <img className="absolute left-0"  src="/gradien.svg" alt="" />
      <img className="absolute bottom-[-300px] right-0"  src="/gradien-2.svg" alt="" />


      <section id="hero-section" className="min-h-screen flex flex-col items-center justify-center w-full relative">
        <Nav/>
        <Hero />
        <div className="w-[1128px] absolute top-0 h-full flex items-end">
          <div className="w-[72px] flex flex-col h-[58%] items-center">
            <img className="w-[18px] fade" src="/circle.svg" alt="" />
            <ScrollProgress sectionId="hero-section" />
          </div>
        </div>
      </section>


      <section id="about-section" className="min-h-screen flex items-start justify-center w-full relative bg-purple-950">
        <About />
        <div className="w-[1128px] absolute top-0 h-full flex items-end">
          <div className="w-[72px] fade flex flex-col h-full items-center">
          <ScrollProgress sectionId="about-section" />
          </div>
        </div>
      </section>
    
      <section id="services-section" className="min-h-screen flex items-start justify-center w-full relative bg-slate-950">
        <Services />
        <div className="w-[1128px] absolute top-0 h-full flex items-end">
          <div className="w-[72px] fade flex flex-col h-full items-center">
          <ScrollProgress sectionId="services-section" />
          </div>
        </div>
      </section>

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