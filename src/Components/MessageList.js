import React from 'react';
import '../App.css'
import Message from './Message';

function MessageList(){
    const data = [
        {
            senderId: 'jon',
            text:'Hey there.'
        },
        {
            senderId: "James",
            text:"Sup"
        }
    ];
    return (
        <div className="message-list">
            {data.map((msg, index) => {
                return (
                   <Message key={index} username={msg.senderId} text={msg.text}/>
                );
            })}
        </div>
    );
}

export default MessageList;