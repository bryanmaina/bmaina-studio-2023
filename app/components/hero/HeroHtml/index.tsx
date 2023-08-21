import {useRef} from "react";
import styles from "./hero.module.scss";

export default function HeroHtml() {
    const ref = useRef<HTMLDivElement>(null!)


    return <div ref={ref} className={styles.body}>
        <div className={styles.element}><h1>Home</h1></div>
        <div className={styles.element}><h1>About</h1></div>
        <div className={`${styles.element} ${styles.active}`}><h1>Work</h1></div>
        <div className={styles.element}><h1>Contact</h1></div>
    </div>
}