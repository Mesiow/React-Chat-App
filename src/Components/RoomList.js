import React from 'react';


function RoomList(){
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
                <h3>Your Rooms:</h3>
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

export default RoomList;