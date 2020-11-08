import io from 'socket.io-client';
//need to be listening on port 4000(server)

let server = "https://react-messenger-application.herokuapp.com/";
const env = process.env.NODE_ENV;

if(env === 'development'){
    server = "http://localhost:4000";
    console.log("using dev port");
}
const socket = io.connect(server);

export {socket};