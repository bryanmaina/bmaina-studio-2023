import {motion} from "framer-motion";
import {HeroLink} from "@/app/components/HeroLink";
import React from "react";

export default function Overlay() {
    return <motion.div className={"mix-blend-difference flex flex-col flex-wrap items-end pr-20 pt-20 gap-3"}>
        {/*<div className={"pointer-events-none left-0 md:left-0 top-[80%] md:top-0 flex justify-end md:justify-center"}>*/}
            <HeroLink href={"/work"} content={"Work"}/>
        {/*</div>*/}
        {/*<div className={"pointer-events-none top-0 left-0 flex w-full justify-between"}>*/}
            <HeroLink href={"/about"} content={"About"}/>
            <HeroLink href={"/contact"} content={"Contact"}/>
        {/*</div>*/}
    </motion.div>;
}
