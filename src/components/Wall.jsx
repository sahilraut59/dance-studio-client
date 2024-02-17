
import { useFrame, useThree } from "@react-three/fiber";
import { WaveMaterial } from "./WaveMaterial";

import { useRef } from "react";

const Wall = (props) => {
  const ref = useRef();
  const { viewport, size } = useThree();
  useFrame((state, delta) => {
    ref.current.time += delta;
    // easing.damp3(ref.current.pointer, state.pointer, 0.2, delta);50
  });
  return (
    <mesh
      position={[props.posX, props.posY, props.posZ]}
      receiveShadow
      rotation={[props.rotateX, props.rotateY, 0]}
    >
      <planeGeometry args={[50, 50]} />
      {/* <MeshReflectorMaterial
        blur={[300, 50]}
        resolution={1024}
        mixBlur={1}
        mixStrength={100}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#aef272"
        metalness={0.8}
      /> */}
      <waveMaterial
        ref={ref}
        key={WaveMaterial.key}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
      />
    </mesh>
  );
};

export default Wall;
