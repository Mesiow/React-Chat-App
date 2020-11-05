const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", socket => {
    //On user connected
    socket.on("connected", name => {
        io.emit("connected", name); //emit name to all clients on connection
    });
    //On user message sent
    socket.on("message", ({name, text}) => { //message event
        io.emit("message", {name, text}); //emit message to all clients
    });
});

http.listen(4000, function(){
    console.log("listening on port 4000");
});