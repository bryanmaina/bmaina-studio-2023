import {useFrame} from "@react-three/fiber";
import {easing} from "maath";

export default function Rig() {

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [Math.sin(-state.pointer.x) * 3.9, state.pointer.y * 3, Math.cos(state.pointer.x) * 8], 0.3, delta);
        state.camera.lookAt(0, 0, 0);
    });

    return null;
}