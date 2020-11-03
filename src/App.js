import React, {useState, useEffect, useRef} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import {Container} from 'semantic-ui-react';
import {Grid, Segment} from 'semantic-ui-react';
import MessageList from './Components/MessageList';
import SendMessageForm from './Components/SendMessageForm';
import RoomList from './Components/RoomList';
import NewRoomForm from './Components/NewRoomForm';
import {socket} from './Socket';


function App() {
  //const [message, setMessage] = useState({name: "", message: ""});
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    //add new name and message to message list when we receive a message event
    socket.on("message", ({name, text}) => {
      setMessageList([...messageList, {name, text}]);
    });
  })

  return (
   <div className="App">
    <Container style={{paddingTop:"25px"}}>
      <Grid columns={2} divided id="Grid"
        style={
          {
           backgroundColor:"blue",
           height:"80vh",
           borderRadius:"10px"
          }
          }>
        <Grid.Row stretched>
          <Grid.Column style={{width:"30%"}}>
              <RoomList />
          </Grid.Column>
          <Grid.Column style={{width:"70%"}}>
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
