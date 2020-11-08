import React, {useState, useEffect, useRef} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import {Container} from 'semantic-ui-react';
import {Grid, Segment} from 'semantic-ui-react';
import MessageList from './Components/MessageList';
import SendMessageForm from './Components/SendMessageForm';
import UserList from './Components/UserList';
import NewRoomForm from './Components/NewRoomForm';
import {socket} from './Socket';

const gridStyles={
    backgroundColor:"#0a376b",
    height:"80vh",
    borderRadius:"10px",
};


function App() {
  const [messageList, setMessageList] = useState([]);
  const [usersConnected, setUsersConnected] = useState([]);

  useEffect(() => {
    //On user connected event
    socket.on("connected", (connectedClients) => {
      //update usersConnected with connected clients and add new name to it
      usersConnected.splice(0, usersConnected.length);
      var newClients = usersConnected.concat(connectedClients);
      setUsersConnected(newClients);
    });
    socket.on("disconnect", name => {
      //remove disconnected user from the list
      //filter out disconnected user if equal to current user in the list
      setUsersConnected(usersConnected.filter(user => user.name !== name));
    });
    //Message sent event
    //add new name and message to message list when we receive a message event
    //.once to prevent multiple events at once
    socket.once("message", ({name, text}) => {
      setMessageList([...messageList, {name, text}]);
    });
  }, [messageList])

  return (
   <div className="App">
    <Container style={{paddingTop:"25px"}}>
      <Grid columns={2} divided id="Grid"
        style={gridStyles}>
        <Grid.Row stretched>
          <Grid.Column style={{width:"30%", maxHeight:"75vh"}}>
              <UserList usersConnected={usersConnected}/>
          </Grid.Column>
          <Grid.Column style={{width:"70%",maxHeight:"75vh"}}>
            <MessageList messages={messageList}/>
            <SendMessageForm />
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    </div>
  );
}


export default App;
