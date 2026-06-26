import { skills } from "../../data/profile";
import { Section } from "../section/Section";
import styles from "./Skills.module.scss";

export function Skills() {
    return (
        <Section title="Skills" id="skills">
            <div className={styles.grid}>
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className={styles.card}>
                        <h3 className={styles.category}>{category}</h3>

                        <ul className={styles.tech}>
                            {items.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}