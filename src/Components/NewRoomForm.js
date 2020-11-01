import React, {useState} from 'react';
import { Button } from 'semantic-ui-react'

function NewRoomForm(){
    const [roomName, setRoomName] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        //create room

        setRoomName("");
    }

    const handleChange = (e) => {
        setRoomName(e.target.value);
    }

    return (
        <div className="new-room-form">
            <form onSubmit={handleSubmit}>
                <input
                    value={roomName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Create A Room"
                    required 
                />
               
                <Button inverted color="green">Add</Button>
            </form>
        </div>
    );
}

export default NewRoomForm;