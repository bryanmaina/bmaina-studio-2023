import {useScroll} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import gsap from "gsap";
import {useRecoilState} from "recoil";
import {isAnimatingScrollState, sectionInViewState, sectionState} from "@/app/states/section.recoil";

export default function ScrollManager() {
    const [section, setSection] = useRecoilState(sectionState);
    const [, setSectionInView] = useRecoilState(sectionInViewState);
    const data = useScroll();
    const lastScroll = useRef(0);
    const [isAnimating, setAnimating] = useRecoilState(isAnimatingScrollState);

    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");

    useEffect(() => {
        console.log("section", section * data.el.clientHeight);
        gsap.to(data.el, {
            duration: 0.3, scrollTop: section * data.el.clientHeight, onStart: () => {
                setAnimating(true)
            }, onComplete: () => {
                setAnimating(false)
            }
        });
    }, [section])


    useFrame(() => {
        if (isAnimating) {
            lastScroll.current = data.offset;
            return;
        }
        const currentSection = Math.floor(data.offset * data.pages);
        setSectionInView(currentSection);
        if (data.offset > lastScroll.current && currentSection === 0) {
            setSection(1);
        }
        if (data.offset < lastScroll.current && data.offset < 1 / (data.pages - 1)) {
            setSection(0);
        }
        lastScroll.current = data.offset;
    })
    return null;
}