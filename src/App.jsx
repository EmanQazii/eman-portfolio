import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { colors } from './theme';

function App() {
  return (
    <main className={`${colors.bg} ${colors.ink}`}>
      <Navbar />

      <Hero />
      <About />
      <Projects />

      <Experience />

      <TechStack />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;