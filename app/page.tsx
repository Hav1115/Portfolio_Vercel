import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

