import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Door() {

    const PATH = '/static/textures/door/' //objeto

    const props = useTexture({  //guarda las texturas de los archivos .jpg
        map: PATH + 'color.jpg',
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
        metalnessMap: PATH + 'metallic.jpg'
    })

    return (
        <mesh castShadow rotation-y={Math.PI / 12} position={[0,-0.36,0]}>
            <planeGeometry args={[2, 3]} />
            <meshStandardMaterial {...props} side={DoubleSide} /> //props trae todo el contenido del useTexture
                                                                  //DoubleSide permite que el plane se vea de ambos lados
        </mesh>
    )
}