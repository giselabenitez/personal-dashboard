import { languages } from "../../data/profile";
import { Card } from "../card/Card";
import { Section } from "../section/Section";
import styles from "./Languages.module.scss";

export function Languages() {
    return (
        <Section title="Languages" id="languages">
            <div className={styles.list}>
                {languages.map((language) => (
                    <Card
                        key={language.name}
                    >
                        <span className={styles.name}>
                            {language.name}
                        </span>
                        <span className={styles.level}>
                            {language.level}
                        </span>
                    </Card>
                ))}
            </div>
        </Section>
    );
}