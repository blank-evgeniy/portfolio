import About from './components/About.tsx/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Header />
      <main className='font-main'>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
