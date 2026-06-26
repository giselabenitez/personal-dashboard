import { experiences } from "../../data/profile";
import { formatDate } from "../../types/profile";
import { Section } from "../section/Section";
import styles from "./Experience.module.scss";

export function Experience() {
    return (
        <Section title="Experience" id="experience">
            <div className={styles.list}>
                {experiences.map((exp) => (
                    <article key={exp.company} className={styles.card}>
                        <div className={styles.header}>
                            <h3>{exp.company}</h3>
                            <p>
                                {formatDate(exp.startDate)} - {exp.endDate === "present"
                                    ? "Present"
                                    : formatDate(exp.endDate)}
                            </p>
                        </div>

                        <p className={styles.role}>{exp.role}</p>

                        <ul className={styles.highlights}>
                            {exp.highlights.map((h) => (
                                <li key={h}>{h}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </Section>
    );
}