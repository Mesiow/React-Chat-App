import io from 'socket.io-client';
//need to be listening on port 4000(server)
const local = "http://localhost:4000";
const socketURL = "/";
const siteURL = "https://evening-ocean-58732.herokuapp.com/";
const socket = io(siteURL);

export {socket};