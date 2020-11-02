import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
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
        <RoomList />
        <MessageList messages={messageList}/>
        <SendMessageForm />
        <NewRoomForm />
    </div>
  );
}


export default App;
