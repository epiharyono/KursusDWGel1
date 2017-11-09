import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text, Icon, Fab} from 'native-base';
import axios from 'axios';

import {apiUrl} from '../utils/config';

export default class Users extends Component{

  state = {
    users: []
  }

  componentDidMount(){
    const self = this;
    axios.get(`${apiUrl}/users`).then(function(result){
      self.setState({
        users: result.data
      })
    })
  }

  handleGoToUsersAdd(){
    this.props.navigator.push({
      screen: "example.UsersAdd",
      title: "Add User"
    })
  }

  handleGoToUsersEdit(id){
    this.props.navigator.push({
      screen: 'example.UsersEdit',
      title: "Edit User",
      passProps: {
        id: id
      }
    })
  }

  renderRow(user){
    return (
      <ListItem key={user.id} onPress={()=> this.handleGoToUsersEdit(user.id)}>
        <Text>{user.username}</Text>
      </ListItem>
    )
  }

  render(){
    return (
      <Container>
        <Content>
          <List>
            {this.state.users.map((user)=> this.renderRow(user))}
          </List>
        </Content>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.handleGoToUsersAdd()}>
            <Icon name="add" />
        </Fab>
      </Container>
    )
  }
}