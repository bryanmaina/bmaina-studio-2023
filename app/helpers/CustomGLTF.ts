import {GLTF} from "three-stdlib";

export interface CustomGLTF extends GLTF {
    nodes: {
        [key: string]: any; // You can refine this type based on your use case
    };
    materials: any;
}