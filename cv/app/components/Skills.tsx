import styles from "./Skills.module.css";

export default function Skills() {
    return (
        <section className="not-splash">
            <h2 className="reenie-beanie-regular">Skills</h2>
            <div className={styles.list}>
                <ul>
                    <li>Languages: C, Java, Python, JS</li>
                    <li>Frameworks/Libraries: Next.js, React, Vercel</li>
                    <li>Programs: VS Code, vim, Github</li>
                </ul>
            </div>
        </section>
    );
}