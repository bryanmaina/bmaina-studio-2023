"use client";
import styles from './styles.module.scss';
import React, {useEffect} from "react";
import {AnimatePresence} from "framer-motion";
import Nav from "./Nav"
import {usePathname} from "next/navigation";
import {useRecoilState, useRecoilValue} from "recoil";
import {menuOpenedState} from "@/app/states/menu.recoil";
import {sectionInViewState} from "@/app/states/section.recoil";

// import Cursor from "@/app/components/Cursor";

interface HeaderProps {
    accentColor: string;
}

export default function Menu({accentColor}: HeaderProps) {

    const [menuOpened, setMenuOpened] = useRecoilState(menuOpenedState);
    const sectionInView = useRecoilValue(sectionInViewState);
    const pathName: string = usePathname();

    useEffect(() => {
        if (menuOpened) setMenuOpened(false);
    }, [pathName])


    useEffect(() => {
        setMenuOpened(false);
    }, [sectionInView])

    return (
        <>
            {/*<Cursor color={accentColor}/>*/}
            {/*<div className={styles.logo} style={{fill: accentColor}}>*/}
            {/*    <BMainaLogo/>*/}
            {/*</div>*/}
            <div onClick={() => setMenuOpened(!menuOpened)}
                 className={`${styles.button}`}
                 style={{
                     "--background-color-var": accentColor
                 } as React.CSSProperties}
            >
                <div
                    className={`${styles.burger} ${menuOpened ? styles.burgerActive : ""}`}
                ></div>
            </div>
            <AnimatePresence mode="wait">
                {menuOpened && <Nav/>}
            </AnimatePresence>
        </>
    )
}