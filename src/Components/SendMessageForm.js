import React, {useState} from 'react';
import '../App.css';
import { Button } from 'semantic-ui-react'
import {socket} from '../Socket';

function SendMessageForm(){
    const [message, setMessage] = useState({name: "Test", text: ""});

    const handleChange = (e) => {
        setMessage({name: "Test", text: e.target.value});
        console.log(e.target.value);
    }

    const onMessageSubmit = (e) => {
        e.preventDefault();
        const {name, text} = message;
        
        console.log("Name: ", name);
        console.log("Message: ", text);
        
        socket.emit("message", {name, text}); //emit message to all clients

        //clear input
        setMessage({name: "Test", text: ""});
    }
  

    return(
        <form onSubmit={onMessageSubmit} className="send-message-form">
            <input 
            onChange={handleChange}
            value={message.text}
            placeholder="Type a message" 
            type="text"
            />
            <Button id="send-message-btn" style={{marginLeft:"2px", marginRight:"0"}}inverted color="blue">Send</Button>
        </form>
    );
}

export default SendMessageForm;