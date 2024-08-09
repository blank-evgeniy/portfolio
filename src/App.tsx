import About from './components/About.tsx/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
            </main>
        </>
    );
}

export default App;
