import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'

class App extends Component {
  constructor() {
    super()
    this.state = {
			id: '',
      name: '',
      address
    }
    this.updateName = this.updateName.bind(this)
  }
  updateName(name) {
    this.setState({
      name
    })
  }
  render () {
		const networkInterface = createNetworkInterface({ 
  uri: 'http://localhost:3000/graphql',
});
const client = new ApolloClient({
  networkInterface,
});

const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
       address
     }
   }
 `;
		
		{/*const query = gql`query PresidentQuery($name: String!) { 
      president(name: $name) {
        name
        term
        party
      }
    }`}

    const Channels = ({ data }) => (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Id: {data.channels && data.channels.id}</Text>
        <Text>Name: {data.channels && data.channels.name}</Text>
      </View>
    )
    
    const ViewWithData = graphql(query, {
      options: { variables: { name: this.state.name } }
    })(Channels)*/}

    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Find Name</Text>
				<Text>Id: {this.state.id}</Text>
				<Text>Name: {this.state.name}</Text>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#dddddd',
    height: 50,
    margin: 20,
    marginBottom: 0,
    paddingLeft: 10
  }
})

export default App