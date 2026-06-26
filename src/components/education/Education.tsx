import { education } from "../../data/profile";
import { Card } from "../card/Card";
import { Section } from "../section/Section";
import styles from "./Education.module.scss";

export function Education() {
    return (
        <Section title="Education" id="education">
            <div className={styles.list}>
                {education.map((item) => (
                    <Card
                        key={item.title}
                    >
                        <div className={styles.header}>
                            <h3>{item.title}</h3>

                            <span className={styles.badge}>
                                {item.status}
                            </span>
                        </div>

                        {item.institution && (
                            <p className={styles.institution}>
                                {item.institution}
                            </p>
                        )}

                        <p className={styles.description}>
                            {item.description}
                        </p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}