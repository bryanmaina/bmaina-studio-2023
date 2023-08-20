import {PerspectiveCamera} from "@react-three/drei";

export default function Controls() {
    // const snap = useRecoilValue(controlsState);


    return (
        <>
            {/*{snap.current && <TransformControls object={scene.getObjectByName(snap.current)} mode={snap.mode}/>}*/}
            <PerspectiveCamera
                fov={50}
                makeDefault={true}/>
            {/*<OrthographicCamera*/}
            {/*    zoom={200}*/}
            {/*    makeDefault={true}/>*/}
            {/*<OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75}/>*/}
        </>
    );
}