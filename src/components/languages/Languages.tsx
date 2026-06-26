import { languages } from "../../data/profile";
import { Section } from "../section/Section";
import styles from "./Languages.module.scss";

export function Languages() {
    return (
        <Section title="Languages" id="languages">
            <div className={styles.list}>
                {languages.map((language) => (
                    <article
                        key={language.name}
                        className={styles.card}
                    >
                        <span className={styles.name}>
                            {language.name}
                        </span>

                        <span className={styles.level}>
                            {language.level}
                        </span>
                    </article>
                ))}
            </div>
        </Section>
    );
}