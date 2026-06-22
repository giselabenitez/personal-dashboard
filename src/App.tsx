import { Experience } from './components/experience/Experience';
import { Hero } from './components/hero/Hero';
import { Layout } from './components/layout/Layout';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
    </Layout>
  );
}

export default App
