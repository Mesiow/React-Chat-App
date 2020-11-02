const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", socket => {
    socket.on("message", ({name, text}) => { //message event
        io.emit("message", {name, text}); //emit message to all clients
    });
});

http.listen(4000, function(){
    console.log("listening on port 4000");
});