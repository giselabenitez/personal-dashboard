import { skills } from "../../data/profile";
import { Card } from "../card/Card";
import { Section } from "../section/Section";
import styles from "./Skills.module.scss";

export function Skills() {
    return (
        <Section title="Skills" id="skills">
            <div className={styles.grid}>
                {Object.entries(skills).map(([category, items]) => (
                    <Card key={category} >
                        <h3 className={styles.category}>{category}</h3>

                        <div className={styles.skills}>
                            {items.map((skill) => (
                                <span key={skill}>{skill}</span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}