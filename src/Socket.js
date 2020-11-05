import io from 'socket.io-client';
//need to be listening on port 4000(server)
const local = "http://localhost:4000";
const socket = io.connect(window.location.hostname);

export {socket};