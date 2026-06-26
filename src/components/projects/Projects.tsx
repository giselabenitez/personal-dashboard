import { projects } from "../../data/profile";
import { Card } from "../card/Card";
import { Section } from "../section/Section";
import styles from "./Projects.module.scss";

export function Projects() {
    return (
        <Section title="Projects" id="projects">
            <div className={styles.grid}>
                {projects.map((project) => (
                    <Card key={project.title} className={styles.projectCard}>
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
                    </Card>
                ))}
            </div>
        </Section>
    );
}