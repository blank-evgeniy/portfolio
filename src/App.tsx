import About from './components/About.tsx/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
    return (
        <>
            <Header />
            <main className="font-main">
                <Hero />
                <About />
                <Projects />
                <Skills />
            </main>
        </>
    );
}

export default App;
