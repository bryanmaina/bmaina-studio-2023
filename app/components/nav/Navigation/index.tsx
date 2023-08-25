import styles from "./navigation.module.scss";
import NavigationItem from "@/app/components/nav/NavigationItem";
import {AnimatePresence} from "framer-motion";

const items = [{title: "home", section: 0}, {title: "about", section: 1}, {
    title: "work", section: 2
}, {title: "contact", section: 3}];

export default function Navigation() {
    return (<><AnimatePresence mode={"sync"}>
            <div className={styles.body}>
                <div className={styles.block}></div>
                {items.map((data, index) => {
                    return <NavigationItem title={data.title} section={data.section} index={index} key={index}/>
                })}
                <div className={styles.block}></div>
            </div>
        </AnimatePresence>
        <div className={`bg-black text-white absolute bottom-0 right-0`}>Available</div>
    </>);
}