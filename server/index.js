const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(http, {wsEngine: 'ws'});

app.use(express.static(__dirname + '../build'));
app.use(cors());


//server route
const router = express.Router();
router.get("/", (req, res) => {
    res.send({response: "Server is up and running"}).status(200);
});
app.use(router);

var connectedClients = [];

io.on("connection", socket => {
    //On user connected
    socket.on("connected", name => {
        //store user's name in the socket session for this client
        socket.name = name;
        connectedClients.push({name: socket.name, id: socket.id});
        //emit all current connected clients array to update list for new clients
        io.emit("connected", (connectedClients)); 
    });
    //On user disconnect
    socket.on("disconnect", () => {
        console.log(socket.name + "disconnected");
        //remove disconnected client from array
        connectedClients = connectedClients.filter(client => client.id !== socket.id);
        io.emit("disconnect", socket.name);
    });
    //On user message sent
    socket.on("message", ({name, text}) => { //message event
        io.emit("message", {name, text}); //emit message to all clients
    });
});

const port = process.env.PORT || 4000; 
http.listen(port, function(){
    console.log("listening on port", port);
});