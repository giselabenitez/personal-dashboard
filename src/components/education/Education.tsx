import { education } from "../../data/profile";
import styles from "./Education.module.scss";

export function Education() {
    return (
        <section className={styles.education}>
            <h2 className={styles.title}>Education</h2>

            <div className={styles.list}>
                {education.map((item) => (
                    <article
                        key={item.title}
                        className={styles.card}
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
                    </article>
                ))}
            </div>
        </section>
    );
}