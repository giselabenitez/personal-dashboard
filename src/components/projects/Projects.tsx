import { projects } from "../../data/profile";
import styles from "./Projects.module.scss";

export function Projects() {
    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>Projects</h2>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <article key={project.title} className={styles.card}>
                        <div className={styles.header}>
                            <h3>{project.title}</h3>

                            {project.type === "case-study" && (
                                <span className={styles.badge}>Case Study</span>
                            )}
                        </div>

                        <p className={styles.description}>
                            {project.description}
                        </p>

                        <div className={styles.stack}>
                            {project.stack.map((tech) => (
                                <span key={tech} className={styles.tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <ul className={styles.highlights}>
                            {project.highlights.map((h) => (
                                <li key={h}>{h}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}