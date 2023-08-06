// import { socket as socketclient } from "socket";
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_APP_BACKEND_URL);
export default socket;
