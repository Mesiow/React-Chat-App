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
  //const [message, setMessage] = useState({name: "", message: ""});
  const [messageList, setMessageList] = useState([]);
  const [usersConnected, setUsersConnected] = useState([]);

  useEffect(() => {
    //add new name and message to message list when we receive a message event
    socket.on("message", ({name, text}) => {
      console.log("socket on message");
      setMessageList([...messageList, {name, text}]);
    });
  })

  return (
   <div className="App">
    <Container style={{paddingTop:"25px"}}>
      <Grid columns={2} divided id="Grid"
        style={gridStyles}>
        <Grid.Row stretched>
          <Grid.Column style={{width:"30%", maxHeight:"75vh"}}>
              <UserList />
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
