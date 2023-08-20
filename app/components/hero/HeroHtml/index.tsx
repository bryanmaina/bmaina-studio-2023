import {useRef} from "react";

export default function HeroHtml() {
    const ref = useRef<HTMLDivElement>(null!)


    return <div ref={ref} className={"h-screen w-screen"}>
        <h1>Hero Section</h1>
    </div>
}