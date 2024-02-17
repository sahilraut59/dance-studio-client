import { MeshReflectorMaterial } from "@react-three/drei";

const Floor = (props) => {
  return (
    <mesh
      position={[props.posX, props.posY, props.posZ]}
      receiveShadow
      rotation={[props.rotateX, props.rotateY, 0]}
    >
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[300, 50]}
        resolution={1024}
        mixBlur={1}
        mixStrength={0.01}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#202020"
        metalness={0.8}
      />
    </mesh>
  );
};

export default Floor;
