import React, {useRef} from "react";
import DevsCare from "@/app/components/DevsCare";
import {useControls} from "leva";
import {Text, useScroll} from "@react-three/drei";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Mesh} from "three";
import {useFrame, useThree} from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);
export default function HeroCanvas() {
    const config = useControls({
        meshPhysicalMaterial: false,
        transmissionSampler: false,
        backside: false,
        backsideThickness: {value: 2, min: -10, max: 100},
        samples: {value: 10, min: 0, max: 32, step: 1},
        resolution: {value: 1024, min: 256, max: 2048, step: 256},
        backsideResolution: {value: 1024, min: 32, max: 2048, step: 256},
        transmission: {value: 1, min: 0, max: 1},
        roughness: {value: 0.01, min: 0, max: 1, step: 0.01},
        ior: {value: 1.18, min: 1, max: 5, step: 0.01},
        thickness: {value: 8, min: 0, max: 100, step: 0.01},
        chromaticAberration: {value: 0.4, min: 0, max: 1},
        anisotropy: {value: 0.2, min: 0, max: 1, step: 0.01},
        distortion: {value: 0.0, min: 0, max: 1, step: 0.01},
        distortionScale: {value: 0.3, min: 0.01, max: 1, step: 0.01},
        temporalDistortion: {value: 0.65, min: 0, max: 1, step: 0.01},
        attenuationDistance: {value: 0.5, min: 0, max: 2.5, step: 0.01},
        clearcoat: {value: 0, min: 0, max: 1},
        attenuationColor: '#ffffff',
        color: 'white'
    });

    const textRef = useRef<Mesh>(null!);

    const scroll = useScroll();

    const {viewport} = useThree();

    useFrame(() => {
        if (textRef.current) {
            textRef.current.position.setY(-(scroll.range(0, 1.5 / 5) * (viewport.height * 20)));
        }
    });

    return (<>
        <Text ref={textRef} castShadow={false} receiveShadow={false} color={"black"}
              letterSpacing={-0.025} fontSize={14} position={[0, 0, -10]}>
            MAIN( ).STUDIO
        </Text>
        {/*<TriaLogo scale={30} config={config}/>*/}
        <DevsCare scale={45} config={config} position={[0, -4, 0]}/>
    </>);
}