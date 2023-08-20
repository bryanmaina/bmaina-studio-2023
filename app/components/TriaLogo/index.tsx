import {Float, MeshTransmissionMaterial, useGLTF} from "@react-three/drei";
import {Vector3} from "@react-three/fiber";
import {CustomGLTF} from "@/app/helpers/CustomGLTF";

interface TriaLogoProps {
    scale?: Vector3;
    position?: Vector3;
    config: any;
}

export default function TriaLogo(props: TriaLogoProps) {
    const {nodes} = useGLTF("/tria_logo_op.glb") as CustomGLTF;

    return (<Float floatIntensity={2} castShadow={false}>
        <mesh
            castShadow={false}
            receiveShadow={true}
            {...props}
            geometry={nodes.Parent.geometry}
            rotation={[Math.PI / 2, 0, 0]}
            dispose={null}
        >
            {props.config.meshPhysicalMaterial ? <meshPhysicalMaterial {...props.config} /> :
                <MeshTransmissionMaterial {...props.config} toneMapped={true}/>}
        </mesh>
    </Float>);
}

useGLTF.preload("/tria_logo_op.glb");