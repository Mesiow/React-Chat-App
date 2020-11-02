import React, { useState } from 'react';
import {Input} from 'semantic-ui-react';


function EnterNameForm(props){
    const {handleNameChange} = props;
    return(
        <Input
        onChange={handleNameChange} 
        icon="user"
        iconPosition="left" 
        placeholder="Enter A Name" />
    );
};

export default EnterNameForm;