import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Certifications from '@/components/Certifications';
import Game from '@/components/Game';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Game />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}
