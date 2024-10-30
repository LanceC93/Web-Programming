import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
    return(
        <section className="not-splash" id={styles["last"]}>
            <h2 className="reenie-beanie-regular">Projects</h2>
            <div className={styles.threeCol}>
                <div className={styles.card}>
                    <Image src = {"/images/stopwatch.png"} alt="stopwatch" width={150} height={150}/>
                    <h3>Time Tracker</h3>
                    <ul>
                        <li>I made a website where a user can track time spent on activities</li>
                        <li>I learned to use a web framework and how to use a tech stack together.</li>
                        <li>I used Vercel and a Postgres database to connect to an external database. </li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <Image src = {"/images/mountain.png"} alt="mountain" width={150} height={150}/>
                    <h3>Lands</h3>
                    <ul>
                        <li>I worked with a team to make a browser card game.</li>
                        <li>We created a server to host games played between two players.</li>
                        <li>We created a system to maintain the information flow between the host and the two clients.</li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <Image src = {"/images/wifi.png"} alt="wifi symbol" width={150} height={150}/>
                    <h3>Pangea Online</h3>
                    <ul>
                        <li>A team and I created an online chat room service.</li>
                        <li>We were required to host multiple chat rooms to online clients.</li>
                        <li>We used an authentication system for logging in and out.</li>
                    </ul>   
                </div>
            </div>
        </section>
    );
}