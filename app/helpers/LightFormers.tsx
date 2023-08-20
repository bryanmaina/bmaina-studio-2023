import {Lightformer, PivotControls} from "@react-three/drei";
import {useRef} from "react";
import {Group} from "three";

export default function LightFormers() {
    const group = useRef<Group>(null!);

    // todo: work on some light variation
    // useFrame((state, delta) => {
    //     if (group.current) (group.current.position.z += delta * 10) > 20 && (group.current.position.z = -60);
    // })

    return (
        <>
            <PivotControls rotation={[0, -Math.PI / 2, 0]} anchor={[1, -1, -1]} scale={75} depthTest={false} fixed
                           lineWidth={2}>
                <group rotation={[0, 0, 1]} ref={group}>
                    <Lightformer castShadow={false} form="circle" intensity={0.5} position={[0, 10, -10]} scale={20}
                                 onUpdate={(self) => self.lookAt(0, 0, 0)}/>
                    <Lightformer castShadow={false} intensity={0.2} onUpdate={(self) => self.lookAt(0, 0, 0)}
                                 position={[-5, 1, -1]}
                                 rotation-y={Math.PI / 2} scale={[50, 10, 1]}/>
                    <Lightformer castShadow={false} intensity={0.2} onUpdate={(self) => self.lookAt(0, 0, 0)}
                                 position={[10, 1, 0]}
                                 rotation-y={-Math.PI / 2} scale={[50, 10, 1]}/>
                    <Lightformer castShadow={false} color="white" intensity={0.1}
                                 onUpdate={(self) => self.lookAt(0, 0, 0)}
                                 position={[0, 1, 0]} scale={[10, 100, 1]}/>
                </group>
            </PivotControls>
        </>
    )
}
