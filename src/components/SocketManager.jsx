import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { io } from "socket.io-client";
export const socket = io("https://dance-studio-backend-9ae513cc2366.herokuapp.com/");
export const charactersAtom = atom([]);
export const SocketManager = () => {
  const [_characters, setCharacters] = useAtom(charactersAtom);
  useEffect(() => {
    function onConnect() {
      console.log("connected");
    }
    function onDisconnect() {
      console.log("disconnected");
    }

    function onHello() {
      console.log("hello");
    }

    function onCharacters(value) {
      console.log(value);
      setCharacters(value);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("hello", () => {
      console.log("alo");
    });
    socket.on("characters", onCharacters);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("hello", onHello);
      socket.off("characters", onCharacters);
    };
  }, []);
};