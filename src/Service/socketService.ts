// import { socket as socketclient } from "socket";
import { io, Socket } from "socket.io-client";

class SocketService {
  socketio: Socket;
  constructor() {
    this.socketio = io(import.meta.env.VITE_APP_BACKEND_URL);
  }

  get socket() {
    return this.socketio;
  }

  emit(events: string, data: any): void {
    this.socketio.emit(events, data);
  }
  clener(event: string, handler?: (...args: any) => void | any): void | any {
    this.socketio.off(event, handler!);
  }

  on(event: string, handler: (...args: any) => void | any): void | any {
    this.socketio.on(event, handler);
  }
}

const socketInstance = new SocketService();
export const { emit, on, clener, socket } = socketInstance;
export default socket;
