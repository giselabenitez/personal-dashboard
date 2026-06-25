import { links, profile } from "../../data/profile";
import styles from "./Hero.module.scss";

export function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.name}>
                {profile.name}
            </h1>

            <h2 className={styles.role}>
                {profile.role}
            </h2>

            <p className={styles.meta}>
                {profile.location}
            </p>

            <div className={styles.actions}>
                <a href={links.github} target="_blank">
                    GitHub
                </a>
                <a href={links.linkedin} target="_blank">
                    LinkedIn
                </a>
                <a href="/CV_Gisela_Benitez.pdf" target="_blank">
                    View CV
                </a>
                <a href={links.email}>Contact</a>
            </div>
        </section>
    );
}