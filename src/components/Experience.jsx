import React from "react";
import Wall from "./Wall";
import Floor from "./Floor";
import * as THREE from "three"

import { Avatar } from "./Avatar";
import { OrbitControls } from "@react-three/drei";
import { useAtom } from "jotai";
import { charactersAtom } from "./SocketManager";

const Experience = () => {
  const [characters] = useAtom(charactersAtom);
  
  // function generateRandomRGB() {
  //   const min = 0; // Minimum RGB value
  //   const max = 5; // Maximum RGB value
  //   const r = Math.floor(Math.random() * (max - min + 1)) + min;
  //   const g = Math.floor(Math.random() * (max - min + 1)) + min;
  //   const b = Math.floor(Math.random() * (max - min + 1)) + min;
  //   return { r, g, b };
  // }
  // Generate random RGB values
  // const { r, g, b } = generateRandomRGB();

  return (
    <>
      <Wall rotateX={0} rotateY={0} posX={0} posY={19} posZ={-25} />
      <Floor rotateX={-Math.PI / 2} rotateY={0} posX={0} posY={0} posZ={0} />
      {characters.map((character) => (
        <Avatar
          key={character.id}
          position={new THREE.Vector3(character.position[0],character.position[1],character.position[2])}
          r={character.r}
          g={character.g}
          b={character.b}
        />
      ))}
      <OrbitControls />
    </>
  );
};

export default Experience;
