import styles from "./Honors.module.css";

export default function Honors() {
    return(
        <section className="not-splash">
            <h2 className="reenie-beanie-regular">Honors and Awards</h2>
            <dl className="yuji-boku-regular">
                <dt>Dean's List</dt><dd className={styles.terms}>Spring, 2023</dd>
                <dt>Zell Miller Recipient</dt><dd className={styles.terms}>Fall, 2021 - Fall, 2024</dd>
            </dl>   
        </section>
    );
}