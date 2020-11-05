import React from 'react';
import {Input, Icon, List} from 'semantic-ui-react';

function UserList(props){
    const {usersConnected} = props;
    return(
        <div className="rooms-list">
          
            <h3><Icon circular inverted name="users"/>Users Connected</h3>
            <hr/>
            
            <List animated verticalAlign='middle'>
                {usersConnected.map(user => {
                    return (<List.Item>
                    <List.Content>
                        <List.Header>
                            <Icon style={{color: "#3ad282"}}
                            name="circle" size="small"/>
                            {user}
                        </List.Header>
                    </List.Content>
                    </List.Item>);
                })}
            </List>
            
        </div>
    );
}

export default UserList;