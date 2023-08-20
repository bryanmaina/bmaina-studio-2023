import styles from "./styles.module.scss";
import {motion} from "framer-motion";
import {scale, slide} from "@/app/components/Menu/anim";
import {useRecoilState, useRecoilValue} from "recoil";
import {sectionInViewState, sectionState} from "@/app/states/section.recoil";
import {desiredMenuItemState, isAnimatingMenuState} from "@/app/states/menu.recoil";

interface LinkData {
    index: number;
    title: string;
    section: number;
}

export default function Item({data}: {
    data: LinkData,
}) {
    const sectionInView = useRecoilValue(sectionInViewState);
    const [, setSection] = useRecoilState(sectionState);
    const [isAnimatingMenu, setIsAnimatingMenu] = useRecoilState(isAnimatingMenuState);
    const [desiredMenuItem, setDesiredMenuItem] = useRecoilState(desiredMenuItemState);

    const handleMouseEnter = () => {
        setIsAnimatingMenu(true);
        setDesiredMenuItem(data.section);
    };

    const handleMouseLeave = () => {
        setIsAnimatingMenu(false);
    };

    const handleClick = () => {
        setIsAnimatingMenu(false);
        setSection(data.section);
    }

    return (<motion.div
        className={styles.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        custom={data.index}
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
    >
        <motion.div
            variants={scale}
            animate={isAnimatingMenu
                ? (desiredMenuItem === data.section ? "open" : "closed")
                : (sectionInView === data.section ? "open" : "closed")
            }
            className={styles.indicator}
        ></motion.div>
        <button className={styles.button} onClick={handleClick} style={{width: "100%"}}>
            {data.title}
        </button>
    </motion.div>);
}