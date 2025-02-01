import { Layout } from './layout/Layout';
import { Hero, About, Projects, Skills } from './sections';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
    </Layout>
  );
}

export default App;
