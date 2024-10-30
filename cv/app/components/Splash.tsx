import Image from "next/image";
import styles from "./Splash.module.css";;

const imageStyle = {
    borderRadius: '5px',
    border: '5px solid #000',
    boxShadow: "10px 10px 10px"
}

export default function Splash() {
    return(
        <section className ={styles.splash}>
            <h1>Lance Cross</h1>
            <Image src = {"/images/headshot.jpg"} alt="headshot" width={150} height={150} style={imageStyle}/>
            <p>330 Turnip Dr Athens, Ga 30605 ▪ (931)259-0130 ▪ lac30869@uga.edu</p>
            <p>I am very curious. I excel in situations where I get to learn and tackle new things regularly.</p>
            <hr/>
        </section>
    );
}