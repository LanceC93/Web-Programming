import { FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
    return(
        <footer className ={styles.foot}>
            &copy;
            <a href="contact.html">Lance</a>
            <a href="https://www.linkedin.com/in/lance-cross-2b2646325/"><FaLinkedin /></a>
        </footer>
    );
}