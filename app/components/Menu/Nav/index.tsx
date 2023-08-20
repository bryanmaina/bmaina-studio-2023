import styles from "./styles.module.scss";
import {motion} from "framer-motion";
import {menuSlide} from "@/app/components/Menu/anim";
import Footer from "./Footer";
import Curve from "./Curve"
import Item from "@/app/components/Menu/Nav/Item";


const navItems = [{
    title: "Home", section: 0
}, {
    title: "Work", section: 1
}, {
    title: "About", section: 2
}, {
    title: "Contact", section: 3
}];


export default function Nav() {

    return (<motion.div
        className={styles.menu}
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
    >
        <div className={styles.body}>
            <div
                className={styles.nav}>
                {/*   onMouseLeave={() => setSelectedIndicator(pathName)}
                >*/}
                <div className={styles.header}>
                    <p>Navigation</p>
                </div>
                {navItems.map((data, index) => {
                    return <Item
                        key={index}
                        data={{...data, index}}
                    />
                })}
            </div>
            <Footer/>
        </div>
        <Curve/>
    </motion.div>);


}