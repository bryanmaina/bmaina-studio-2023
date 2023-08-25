import {MouseEvent, useEffect, useRef} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import gsap from "gsap";
import {sectionInViewState, sectionState} from "@/app/states/section.recoil";
import {desiredMenuItemState, isAnimatingMenuState} from "@/app/states/menu.recoil";

import styles from "./navigationItem.module.scss";
import useMousePosition from "@/app/helpers/useMousePosition ";

interface NavItemProps {
    title: string,
    section: number,
    index: number
}

export default function NavigationItem(props: NavItemProps) {

    const beckyRef = useRef<HTMLDivElement>(null!);
    const titleRef = useRef(null!)

    const sectionInView = useRecoilValue(sectionInViewState);
    const [, setSection] = useRecoilState(sectionState);
    const [isAnimatingMenu, setIsAnimatingMenu] = useRecoilState(isAnimatingMenuState);
    const [desiredMenuItem, setDesiredMenuItem] = useRecoilState(desiredMenuItemState);

    const mousePosition = useMousePosition();

    useEffect(() => {
        let bounds = beckyRef.current.getBoundingClientRect();
        if (!isAnimatingMenu && sectionInView === props.section) {
            beckyRef.current.style.visibility = "hidden";
            gsap.to(beckyRef.current, {visibility: "hidden", duration: 0.3})
        } else {
            console.log("I am here!");
            gsap.to(beckyRef.current, {visibility: "visible", duration: 0.3});
        }
    }, [sectionInView, isAnimatingMenu]);

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        setIsAnimatingMenu(false);
        setDesiredMenuItem(props.section);
        const target = e.currentTarget as HTMLDivElement;
        const bounds = target.getBoundingClientRect();
        if (e.clientY < bounds.top + (bounds.height / 2)) {
            gsap.set(beckyRef.current, {top: "100%"});
        } else {
            gsap.set(beckyRef.current, {top: "-100%"});
        }
        gsap.to(beckyRef.current, {top: "0%", duration: 0.3});
    };

    const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
        if (sectionInView !== props.section) {
            setIsAnimatingMenu(true);
            const target = e.currentTarget as HTMLDivElement;
            const bounds = target.getBoundingClientRect();
            if (e.clientY < bounds.top + (bounds.height / 2)) {
                gsap.to(beckyRef.current, {top: "101%", duration: 0.3});
            } else {
                gsap.to(beckyRef.current, {top: "-100%", duration: 0.3});
            }
        }
    };

    const handleClick = () => {
        setIsAnimatingMenu(false);
        setSection(props.section);
    }

    return (<div
        className={styles.body}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
    >
        <div ref={beckyRef} className={styles.becky}></div>
        <button ref={titleRef} className={styles.element}><p>{props.title}</p></button>
    </div>);
}