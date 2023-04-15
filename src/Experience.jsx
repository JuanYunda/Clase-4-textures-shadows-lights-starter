import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'

import Sphere from './Sphere'

import Floor from './Floor'

import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { DirectionalLightHelper,
    HemisphereLight, HemisphereLightHelper,
    PointLight, PointLightHelper,
    RectAreaLight,
    SpotLight, SpotLightHelper} from 'three'

export default function Experience() {

    const directionalLightRef = useRef()
    const hemisphereLightRef = useRef()
    const pointLightRef = useRef()
    const spotLightRef = useRef()

    useHelper(directionalLightRef, DirectionalLightHelper, 1) //herramienta que ayuda a ver la dirección de
                                                              //la luz respecto a objetos
    useHelper(hemisphereLightRef, HemisphereLightHelper, 1) //herramienta que ayuda a ver la dirección de
                                                              //la luz respecto a objetos
    useHelper(pointLightRef, PointLightHelper, 1) //herramienta que ayuda a ver la dirección de
                                                              //la luz respecto a objetos
    useHelper(spotLightRef, SpotLightHelper, 1) //herramienta que ayuda a ver la dirección de
                                                              //la luz respecto a objetos

    const hemisphereLight = new HemisphereLight(0xffffff, 0xffffff, 0.6); //medio rombo
    hemisphereLight.position.set(-2, 5, 0);
    hemisphereLight.castShadow = true;

    const pointLight = new PointLight(0xffff00, 1, 100); //rombo
    pointLight.position.set(0, 5, 2);
    pointLight.castShadow = true;

    const rectAreaLight = new RectAreaLight(0xffffff, 1, 10, 10); //nada
    rectAreaLight.position.set(5, 1, 0);
    rectAreaLight.castShadow = true;

    const spotLight = new SpotLight(0xffffff, 1); //lineas
    spotLight.position.set(2, 5, 0);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.05;
    spotLight.decay = 2;
    spotLight.distance = 200;
    spotLight.castShadow = true;

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/*<directionalLight
          ref={directionalLightRef}
          //sunPosition={sunPosition}
          position={[1, 2, 3]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />*/}
        <Door/>

        {/*<Sphere/>*/}

        <Floor/>

        {/*<group>
            <primitive
            object={hemisphereLight}
            ref={hemisphereLightRef}
            castShadow
            //shadow-mapSize={[1024, 1024]}
            />
        </group>*/}

        {/*<group>
            <primitive object={pointLight} ref={pointLightRef} shadow-mapSize={[1024, 1024]}/>
        </group>*/}
        
        {/*<group>
            <primitive object={rectAreaLight} />
        </group>*/}

        {<group>
            <primitive object={spotLight} ref={spotLightRef}/>
        </group>}
    </>
}