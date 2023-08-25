import {useEffect, useState} from "react";

export default function useMousePosition(includeTouch = false) {
    const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({x: 0, y: 0});
    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent | TouchEvent) => {
            let x, y
            if (includeTouch && ev.touches) {
                const e = ev as TouchEvent;
                const touch = e.touches[0];
                [x, y] = [touch.clientX, touch.clientY];
            } else {
                const e = ev as MouseEvent;
                [x, y] = [e.clientX, e.clientY];
            }
            setMousePosition({x, y});
        };
        window.addEventListener('mousemove', updateMousePosition);
        if (includeTouch) {
            window.addEventListener('touchmove', updateMousePosition);
        }
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            if (includeTouch) {
                window.removeEventListener('touchmove', updateMousePosition);
            }
        };
    }, [includeTouch]);
    return mousePosition;
};