import React, { useState } from 'react';
import {Input, Modal, Button} from 'semantic-ui-react';
import '../App.css';


function modalReducer(state, action){
  switch(action.type){
    case 'close':
      return {open: false};
    default:
      throw new Error("Unsupported Action");
  }
}


function EnterNameModal(props){
    const [state, dispatch] = React.useReducer(modalReducer,
        {
            open: true,
            size: 'mini'
        });
    const {open , size} = state;
    const {handleNameChange} = props;
    return(
    <>
        <Modal
        size={size}
        open={open}
        //onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>Set Your Username</Modal.Header>
        <Modal.Content>
            <Input fluid 
                id="name-input"
                onChange={handleNameChange} 
                icon="user"
                iconPosition="left" 
                placeholder="Enter A Name" 
            />
   
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => dispatch({ type: 'close' })}>
            Connect
          </Button>
        </Modal.Actions>
      </Modal>
      </>
    );
};

export default EnterNameModal;