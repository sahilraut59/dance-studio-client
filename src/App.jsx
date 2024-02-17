

import { SocketManager } from "./components/SocketManager";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <SocketManager />
      <Canvas camera={{ position: [0, 1, 15], fov: 35, near: 1, far: 1000 }}>
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={2} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
