import io from 'socket.io-client';
//need to be listening on port 4000(server)

let server = window.location.hostname;
const env = process.env.NODE_ENV;

if(env === 'development'){
    server = "http://localhost:4000";
    console.log("using dev port");
}
const siteURL = "https://evening-ocean-58732.herokuapp.com/";
const socket = io.connect(server);

export {socket};