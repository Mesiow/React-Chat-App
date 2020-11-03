import React, { useState } from 'react';
import {Input} from 'semantic-ui-react';
import '../App.css';


function EnterNameForm(props){
    const {handleNameChange} = props;
    return(
        <Input fluid 
        id="name-input"
        onChange={handleNameChange} 
        icon="user"
        iconPosition="left" 
        placeholder="Enter A Name" />
    );
};

export default EnterNameForm;