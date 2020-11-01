import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import MessageList from './Components/MessageList';
import SendMessageForm from './Components/SendMessageForm';
import RoomList from './Components/RoomList';
import NewRoomForm from './Components/NewRoomForm';



function App() {
  /*
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("/");

    //listen to event your id
    socketRef.current.on("your id", id => {
      setYourID(id);
    });

    socketRef.current.on("message", (message) =>{

    });
  })

  const receivedMessage = (message) => {
    setMessages(oldMsgs => [...oldMsgs, message]);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const msgObj = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socketRef.current.emit("send message", msgObj);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  }*/

  return (
    <div className="App">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
    </div>
  );
}


export default App;
