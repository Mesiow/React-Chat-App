import React from 'react';
import '../App.css'
import Message from './Message';

function MessageList(props){
    const {messages} = props;
    return (
        <div className="message-list">
            {messages.map((msg, index) => {
                return (
                   <Message key={index} username={msg.name} text={msg.text}/>
                );
            })}
        </div>
    );
}

export default MessageList;