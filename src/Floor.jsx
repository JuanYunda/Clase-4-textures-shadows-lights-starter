import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Floor() {

    const PATH = '/static/textures/floor/' //objeto

    const props = useTexture({  //guarda las texturas de los archivos .jpg
        map: PATH + 'color.jpg',
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
    })

    return (
        <mesh receiveShadow position-y={ - 1.86 } rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[8, 8]} />
            <meshStandardMaterial {...props} side={DoubleSide}/>
        </mesh>
    )
}
