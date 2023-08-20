import {EffectComposer, N8AO, TiltShift2} from "@react-three/postprocessing";
import React from "react";
import {useControls} from "leva";

export default function Effects({degraded}: { degraded: boolean }) {
    const {ao, tiltShift, ...props} = useControls("hej", {
        ao: true,
        aoIntensity: {value: 1, min: 0, max: 5},
        aoRadius: {value: 0.5, min: 0, max: 1, steps: 0.1},
        aoDistanceFalloff: {value: 0.1, min: 0, max: 1, steps: 0.1},
        aoColor: "#0bc",
        tiltShift: true,
        tiltBlur: {value: 0.45, min: 0, max: 1},
        tiltSamples: {value: 6, min: 1, max: 10, step: 1},
        tiltTaper: {value: 1, min: 0, max: 1},
    })

    return (
        // <EffectComposer>
        <EffectComposer disableNormalPass multisampling={2}>
            <>
                {ao && (<N8AO color={props.aoColor} aoRadius={props.aoRadius} intensity={props.aoIntensity}
                              distanceFalloff={props.aoDistanceFalloff} quality={degraded ? "low" : "medium"}/>)}
                {tiltShift && <TiltShift2 taper={props.tiltTaper} samples={props.tiltSamples} blur={props.tiltBlur}
                                          direction={[1, -1]}/>}

            </>
            {/*<N8AO aoRadius={1} intensity={2}/>*/}
            {/*<TiltShift2 blur={0.2}/>*/}
            {/*    </EffectComposer>*/}
        </EffectComposer>);
}