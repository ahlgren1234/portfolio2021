import Navbar from '@/components/Navbar';
import About from '@/components/About';
import LatestProject from '@/components/LatestProject';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Certifications from '@/components/Certifications';
import Game from '@/components/Game';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
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
