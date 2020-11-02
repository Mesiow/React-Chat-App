import io from 'socket.io-client';
//need to be listening on port 4000(server)
const socket = io.connect("http://localhost:4000");

export {socket};