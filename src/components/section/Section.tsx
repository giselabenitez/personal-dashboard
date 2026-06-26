import styles from "./Section.module.scss";

type SectionProps = {
    title: string;
    children: React.ReactNode;
    id?: string;
};

export function Section({ title, children, id }: SectionProps) {
    return (
        <section className={styles.section} id={id}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
            </div>

            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}