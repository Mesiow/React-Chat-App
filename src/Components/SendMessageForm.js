import React, {useState} from 'react';
import '../App.css';
import { Button } from 'semantic-ui-react'

function SendMessageForm(){
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setMessage(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //send off the msg
        //sendMessage(message);
        setMessage("");
    }

    return(
        <form onSubmit={handleSubmit} className="send-message-form">
            <input 
            onChange={handleChange}
            value={message}
            placeholder="Type a message" 
            type="text"
            />
            <Button id="send-message-btn" style={{marginLeft:"2px", marginRight:"0"}}inverted color="blue">Send</Button>
        </form>
    );
}

export default SendMessageForm;