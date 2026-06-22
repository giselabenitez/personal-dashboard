import { profile } from "../../data/profile";
import styles from "./Hero.module.scss";

export function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>
                {profile.name}
            </h1>

            <h2 className={styles.role}>
                {profile.role}
            </h2>

            <p className={styles.location}>
                {profile.location}
            </p>

            <div className={styles.actions}>
                <button>Download CV</button>
                <button>LinkedIn</button>
                <button>GitHub</button>
            </div>
        </section>
    );
}