import { Bloom, EffectComposer, GodRays } from "@react-three/postprocessing";
import React, { forwardRef, useEffect, useState } from "react";
import * as THREE from "three";

const Emitter = forwardRef((props, forwardRef) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/10.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <mesh ref={forwardRef} position={[0, 0, -16]} {...props}>
      <planeGeometry args={[50,50]} />
      <meshBasicMaterial>
        <videoTexture
          attach="map"
          args={[video]}
          colorSpace={THREE.SRGBColorSpace}
        />
      </meshBasicMaterial>
      <mesh scale={[16.05, 10.05, 1]} position={[0, 0, -0.01]}>
        <planeGeometry />
        <meshBasicMaterial color="black" />
      </mesh>
    </mesh>
  );
});
const Screen = () => {
  const [material, set] = useState();
  return (
    <>
      <Emitter ref={set} />
      {material && (
        <EffectComposer disableNormalPass multisampling={8}>
          <GodRays sun={material} exposure={0.34} decay={0.8} blur />
          <Bloom
            luminanceThreshold={0}
            mipmapBlur
            luminanceSmoothing={0.0}
            intensity={1}
          />
        </EffectComposer>
      )}
    </>
  );
};

export default Screen;
