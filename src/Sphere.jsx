import { useTexture } from "@react-three/drei";

export default function Sphere() {

  const PATH = '/static/textures/sphere/' //objeto

  const props = useTexture({  //guarda las texturas de los archivos .jpg
      map: PATH + 'color.jpg',
      displacementMap: PATH + 'height.png',
      normalMap: PATH + 'normal.jpg',
      roughnessMap: PATH + 'roughness.jpg',
      aoMap: PATH + 'ao.jpg',
  })

  return (
    <mesh position={[0,-1.7,0]} rotation-x={Math.PI}>
        <coneGeometry args={[1,2,1000]}/>
        <meshStandardMaterial {...props}/>
    </mesh>
  )
}