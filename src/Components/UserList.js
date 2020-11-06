import React from 'react';
import {Input, Icon, List} from 'semantic-ui-react';

function UserList(props){
    const {usersConnected} = props;
    return(
        <div className="rooms-list">
            <h3><Icon circular inverted name="users"/>Online Users</h3>
            <hr/>
            <List animated verticalAlign='middle'>
                {usersConnected.map(user => {
                return (
                <List.Item key={user.id}>
                    <List.Content>
                        <List.Header>
                            <Icon style={{color: "#3ad282", fontSize: "medium"}}
                            name="circle" size="small"/>
                            <span style={{fontSize:"large"}}>{user.name}</span> 
                        </List.Header>
                    </List.Content>
                </List.Item>
                );
                })}
            </List>
            
        </div>
    );
}

export default UserList;