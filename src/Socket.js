// Replace your socket import with this:
import { io } from "socket.io-client";

// Initialize socket with proper URL and options
export const socket = io("http://localhost:5000", { // Replace with your server URL
  withCredentials: true,
  autoConnect: false, // Manually connect after auth is ready
  transports: ["websocket"] // Force WebSocket transport
});
