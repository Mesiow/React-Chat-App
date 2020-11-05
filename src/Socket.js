import io from 'socket.io-client';
//need to be listening on port 4000(server)
const local = "http://localhost:4000";
const hostname = window.location.hostname;
console.log(hostname);
var HOST = location.origin.replace(/^http/, 'ws')
var ws = new WebSocket(HOST);
const socket = io.connect("https://evening-ocean-58732.herokuapp.com/");

export {socket};