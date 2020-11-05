import React from 'react';
import {Input, Icon, List} from 'semantic-ui-react';

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
          
            <h3><Icon circular inverted name="users"/>Users Connected</h3>
            <hr/>
            
            <List animated verticalAlign='middle'>
                <List.Item>
                    <List.Content>
                        <List.Header>
                            <Icon style={{color: "#3ad282"}}
                            name="circle" size="small"/>
                            Helen
                        </List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header>Christian</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header>Daniel</List.Header>
                    </List.Content>
                </List.Item>
            </List>
            
        </div>
    );
}

export default UserList;