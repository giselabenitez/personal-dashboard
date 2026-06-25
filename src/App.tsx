import { Education } from './components/education/Education';
import { Experience } from './components/experience/Experience';
import { Hero } from './components/hero/Hero';
import { Languages } from './components/languages/Languages';
import { Layout } from './components/layout/Layout';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <Layout>
      <Hero />
      <div className="container">
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Languages />
      </div>
    </Layout>
  );
}

export default App
