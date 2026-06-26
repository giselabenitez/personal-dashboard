import { links, profile } from "../../data/profile";
import styles from "./Hero.module.scss";

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.eyebrow}>
                    {profile.role}
                </span>
                <h1>
                    {profile.name}
                </h1>
                <p className={styles.description}>
                    Building thoughtful digital experiences with React,
                    TypeScript and user-centered design.
                </p>

                <div className={styles.actions}>
                    <a href="/CV_Gisela_Benitez.pdf" target="_blank">
                        View CV
                    </a>
                </div>

                <div className={styles.links}>
                    <a href={links.github} target="_blank">
                        GitHub
                    </a>
                    <a href={links.linkedin} target="_blank">
                        LinkedIn
                    </a>
                    <a href={links.email}>Contact</a>
                </div>
            </div>
            <div className={styles.decoration} />
        </section>
    );
}