import { experiences } from "../../data/profile";

export function Experience() {
    return (
        <section>
            <h2>Experience</h2>

            {experiences.map((experience) => (
                <article key={`${experience.company}-${experience.period}`}>
                    <h3>{experience.company}</h3>
                    <p>{experience.role}</p>
                    <p>{experience.period}</p>
                </article>
            ))}
        </section>
    );
}