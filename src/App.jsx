import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import HowIWork from './components/HowIWork';
import WhatIBuild from './components/WhatIBuild';
import Contact from './components/Contact';
import { colors } from './theme';

function App() {
  return (
    <main className={`${colors.bg} ${colors.ink}`}>
      <Navbar />
      <Hero />
      <Projects />
      <HowIWork />
      <WhatIBuild />
      <Contact />
    </main>
  );
}

export default App;