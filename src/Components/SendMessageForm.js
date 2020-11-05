import React, {useState} from 'react';
import EnterNameModal from './EnterNameModal';
import '../App.css';
import { Button, Input } from 'semantic-ui-react'
import {socket} from '../Socket';

function SendMessageForm(){
    const [message, setMessage] = useState({name: "", text: ""});

    const handleMessageChange = (e) => {
        setMessage({name: message.name, text: e.target.value});
        console.log(e.target.value);
    }

    const handleNameChange = (e) => {
        setMessage({name: e.target.value, text: message.text});
    }

    const onMessageSubmit = (e) => {
        e.preventDefault();
        const {name, text} = message;
        socket.emit("message", {name, text}); //emit message to all clients
        //clear input
        setMessage({name: name, text: ""});
    }
  

    return(
        <div>
        <EnterNameModal name={message.name} handleNameChange={handleNameChange} />
        <form onSubmit={onMessageSubmit} className="send-message-form">
            <Input
            onChange={handleMessageChange}
            value={message.text} 
            fluid 
            action={{icon:"send"}} 
            placeholder="Type A Message..." 
            />
            {/*<Button style={{marginLeft:"2px", marginRight:"0"}}inverted color="blue">Send</Button>*/}
        </form>
        </div>
    );
}

export default SendMessageForm;