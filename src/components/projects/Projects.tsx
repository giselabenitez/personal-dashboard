import { projects } from "../../data/profile";
import { Section } from "../section/Section";
import styles from "./Projects.module.scss";

export function Projects() {
    return (
        <Section title="Projects" id="projects">
            <div className={styles.grid}>
                {projects.map((project) => (
                    <article key={project.title} className={styles.card}>
                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <div className={styles.stack}>
                            {project.stack.map(t => (
                                <span key={t}>{t}</span>
                            ))}
                        </div>

                        <ul>
                            {project.highlights.map(h => (
                                <li key={h}>{h}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </Section>
    );
}