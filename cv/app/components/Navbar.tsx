import styles from "./Navbar.module.css";

export default function Navbar() {
    return(
        <nav className={styles.bar}>
            <p>Lance Cross</p>
            <p>
                <a href="contact.html">Contact Lance</a>
            </p>
        </nav>
    );
}