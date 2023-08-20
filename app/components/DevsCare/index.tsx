import {
    Decal,
    Float,
    MeshTransmissionMaterial,
    PerspectiveCamera,
    RenderTexture,
    Text,
    useGLTF
} from "@react-three/drei";
import {useFrame, Vector3} from "@react-three/fiber";
import {CustomGLTF} from "@/app/helpers/CustomGLTF";
import React, {useRef} from "react";

interface DevsCareProps {
    scale: Vector3;
    position?: Vector3;
    config: any;
}

export default function DevsCare(props: DevsCareProps) {

    const textRef = useRef<Text>();
    const {nodes, materials} = useGLTF("/devs_care.gltf") as CustomGLTF;
    const plasticMaterial = materials["reflective material"];

    useFrame((state) => {
        if (textRef.current) {
            textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 4;
        }
    })


    return (<Float floatIntensity={.2} {...props}>
        <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.capTop.geometry}
            material={plasticMaterial}
            rotation={[-Math.PI, 0, 0]}
            scale={-1}
        />
        <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.capBottom.geometry}
            material={plasticMaterial}
            rotation={[-Math.PI, 0, 0]}
            scale={-1}
        >
            <Decal position={[0, 6.3 /(props.scale as number), -20 / (props.scale as number)]} rotation={[0, 0, 0]}
                   scale={[0.2, 0.1, 1]}>
                <meshStandardMaterial
                    roughness={0.6}
                    transparent={true}
                    polygonOffset={true}
                    polygonOffsetFactor={-10}>
                    <RenderTexture attach="map" anisotropy={16}>
                        <PerspectiveCamera makeDefault manual fov={50} aspect={0.2 / 0.1} position={[0, 0, 10]}/>
                        <color attach="background" args={['black']}/>
                        <ambientLight intensity={0.5}/>
                        <directionalLight position={[10, 10, 5]}/>
                        <Text rotation={[0, Math.PI, 0]} ref={textRef} fontSize={1} color="white">
                            FULL-STACK DEVELOPER
                        </Text>
                    </RenderTexture>
                </meshStandardMaterial>
            </Decal>
        </mesh>
        <mesh
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.bottle.geometry}
            rotation={[-Math.PI, 0, 0]}
            scale={-1}
            dispose={null}>
            {props.config.meshPhysicalMaterial ? <meshPhysicalMaterial {...props.config} /> :
                <MeshTransmissionMaterial {...props.config} toneMapped={true}/>}
        </mesh>
        <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.frontLabel.geometry}
            material={materials["Default OBJ"]}
            rotation={[-Math.PI, 0, 0]}
            scale={-1}
        />
    </Float>);
}

useGLTF.preload("/devs_care.gltf");
