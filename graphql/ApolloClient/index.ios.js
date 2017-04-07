import React, { Component } from 'react';
import { AppRegistry, View, Text} from 'react-native';

class Client extends Component {
  constructor(){
    super()
    this.state = {
      loading: true,
      data: []
    }
  }
  componentDidMount() {
    this.getUsers()
  }

  async getUsers() {
    try {
      let response = await fetch('http://10.0.2.2:4040/graphql?query={users{id%20name%20address}}')
      console.log(response);
      let results = await response.json();
      let users = results.data.users
      console.log('t', users);
      this.setState({ data: users })
    } catch(error) {
      console.error(error);
    }
  }

   render() {
     return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9'}}>
        <Text>This data is from Graphql server</Text>
        <View>
        {this.state.data.map(row => 
          <View style={{ borderBottomWidth: 1}}>
            <Text>Id: {row.id}</Text>
            <Text>Name: {row.name}</Text>
            <Text>Address: {row.address}</Text>
          </View>
        )}
        </View>
          
        </View>
     );
   }
 }

AppRegistry.registerComponent('ApolloClient', () => Client);