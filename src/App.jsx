import './App.css';
import Design from './component/Design.jsx';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';


function App() {
  return (
    <>
    
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Design/>
    </>
  );
}

export default App;
