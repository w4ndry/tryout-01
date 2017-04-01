import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';

const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
       address
     }
   }
 `;

const ChannelsList = ({ data: {loading, error, channels }}) => {
   channels.map( ch => {<Text>{ch.name}</Text>} ) 
 };
const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);

const networkInterface = createNetworkInterface({ 
  uri: 'http://localhost:3000/graphql',
});
const client = new ApolloClient({
  networkInterface,
});

class Client extends Component {
   render() {
     return (
       <ApolloProvider client={client}>
         <View>
         <View>
             <Text>Welcome to Apollo</Text>
             </View>
           <ChannelsListWithData />
         </View>
       </ApolloProvider>
     );
   }
 }

AppRegistry.registerComponent('ApolloClient', () => Client);