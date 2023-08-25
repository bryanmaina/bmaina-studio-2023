import React, {useState} from "react";
import {motion} from "framer-motion";
import styles from "./about.module.scss";
import useMousePosition from "@/app/helpers/useMousePosition ";


export default function AboutHtml() {

    const {x, y} = useMousePosition(false);
    const [isHovered, setIsHovered] = useState(false);
    const size = isHovered ? 400 : 40;

    return (<section className={styles.body}>
        <motion.div
            className={styles.mask}
            animate={{
                WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`, WebkitMaskSize: `${size}px`,
            }}
            transition={{type: "tween", ease: "backOut", duration: 0.8}}
        >
            <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                Truth be told, I've been partying more on the backend dance floor than strutting my stuff on the
                frontend catwalk.

                "To break the rules, you must first master them." That's my ninja code.

                Why, you ask? I'm like the secret sauce behind that website or robot, the coding maestro who won't
                settle for anything
                less than digital Fort Knox meets cheetah-speed performance. Sleeping easy knowing my clients aren't
                playing with fire? You bet!

                And let's get one thing straight – my frontend game is as sharp as ever. I
                can bust out moves that'll make your pixels spin! 🎩🕺

                But hold onto your packets, because when it's time for delivery, I switch into hyperdrive. Imagine a
                data-driven superhero with a jetpack – that's me, zooming through the digital realm at ludicrous speed.
                My clients? They're snoozing like content kittens, knowing their data's in the paws of a lightning-fast


                courier. Oh yeah, you better believe it's all about delivering at the speed of wow! ⚡🚀
            </p>
        </motion.div>
        <div className={styles.content}>
            <p>
                Making good shit since 2017.
            </p>
        </div>
    </section>);
}