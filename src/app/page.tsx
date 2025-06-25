import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import LatestProject from '@/components/LatestProject';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Certifications from '@/components/Certifications';
import Game from '@/components/Game';
import Hotjar from '@hotjar/browser';

const siteId = 6445406;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Game />
      <LatestProject />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}
