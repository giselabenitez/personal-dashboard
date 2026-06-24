import { skills } from "../../data/profile";
import styles from "./Skills.module.scss";

export function Skills() {
    return (
        <section className={styles.skills}>
            <h2 className={styles.title}>Skills</h2>

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
        </section>
    );
}