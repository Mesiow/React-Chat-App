import React from 'react';
import {Input} from 'semantic-ui-react';

function UserList(){
    const roomlist = [
        {
            number: 1,
            type: "Sports",
        },
        {
            number:2,
            type: "Tech"
        },
        {
            number:3,
            type:"Food"
        }
    ];
    return(
        <div className="rooms-list">
            <ul>
                <h3>Users Connected:</h3>
                {roomlist.map(room => {
                    return (
                        <li>
                            <a href="#">
                                {room.type}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default UserList;