const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

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

http.listen(4000, function(){
    console.log("listening on port 4000");
});