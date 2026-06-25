import { languages } from "../../data/profile";
import styles from "./Languages.module.scss";

export function Languages() {
    return (
        <section className={styles.languages}>
            <h2 className={styles.title}>Languages</h2>

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
        </section>
    );
}