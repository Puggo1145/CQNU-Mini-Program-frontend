import { io } from "socket.io-client";

export function testSocketConnection() {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
        console.log(socket.connected);
    });

    return socket.connected;
};
testSocketConnection();