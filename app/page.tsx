"use client";
import {Canvas} from "@react-three/fiber";
import {Environment, Loader, PerformanceMonitor, Scroll, ScrollControls} from "@react-three/drei";
import React, {Suspense, useState} from "react";
import ScrollManager from "@/app/helpers/ScrollManager";
import {RecoilRoot} from "recoil";
import LightFormers from "@/app/helpers/LightFormers";
import {Leva} from "leva";
import Controls from "@/app/helpers/Controls";
import HeroCanvas from "@/app/components/hero/HeroCanvas";
import AboutCanvas from "@/app/components/about/AboutCanvas";
import Effects from "@/app/helpers/Effects";
import Rig from "@/app/helpers/Rig";
import AboutHtml from "@/app/components/about/AboutHtml";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import HeroHtml from "@/app/components/hero/HeroHtml";
import Navigation from "@/app/components/nav/Navigation";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {

    const [degraded, degrade] = useState(false);

    return (<RecoilRoot>
        <Suspense fallback={null}>
            <Canvas
                gl={{logarithmicDepthBuffer: true, antialias: false}}
                dpr={[1, degraded ? 1.5 : 2]}
            >
                <Controls/>
                <Leva hidden={true}/>
                {/*<color attach="background" args={["#15151a"]}/>*/}
                <color attach="background" args={["#e7e3e3"]}/>
                <hemisphereLight castShadow={false} intensity={0.2}/>
                <spotLight
                    position={[20, 20, 10]}
                    castShadow={false}
                    penumbra={1}
                    angle={0.2}
                />
                <ambientLight castShadow={false} intensity={0.5}/>
                <spotLight castShadow={false} position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                <pointLight castShadow={false} position={[-10, -10, -10]}/>
                {/*<Controls/>*/}
                <PerformanceMonitor onDecline={() => degrade(true)}/>
                <ScrollControls pages={4}>
                    <ScrollManager/>
                    <Scroll>
                        {/*    <Overlay/>*/}
                        <HeroCanvas/>
                        {/* <AboutCanvas/> */}
                    </Scroll>
                    {/* <Scroll html={true}>
                        <RecoilRoot>
                            <HeroHtml/> 
                            <AboutHtml/>
                        </RecoilRoot>
                    </Scroll> */}
                </ScrollControls>
                <Effects degraded={degraded}/>
                <Rig/>
                <Environment preset={"studio"} frames={degraded ? 1 : 120}>
                    <LightFormers/>
                </Environment>
            </Canvas>
            {/*<Menu accentColor={"#a5a5a5"}/>*/}
            {/* <Navigation/> */}
        </Suspense>
        <Loader
            dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text
            initialState={(active) => active} // Initial black out state
        />
    </RecoilRoot>);
}
