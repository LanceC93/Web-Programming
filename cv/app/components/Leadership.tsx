import styles from "./Leadership.module.css"
export default function Leadership() {
    return(
        <section className="not-splash">
            <h2 className="reenie-beanie-regular">Leadership and Experience</h2>
            <dl className="yuji-boku-regular">
                <dt><a href="https://www.homedepot.com/">Home Depot Order Fulfillment Associate</a></dt>
                <dd className={styles.terms}>May, 2021 - August, 2021</dd>
                <dt>Washington Burrito Cashier</dt>
                <dd className={styles.terms}>May 2024 - August, 2024</dd>
            </dl>
        </section>
    );
}