import express from 'express';
import { 
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import { schema } from './src/schema';

const PORT = 4040;

const server = express();

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));
server.use('/graphiql', graphiqlExpress({
  endpointURL: 'http://10.0.2.2/graphql',
}));

server.listen(PORT, () => console.log(`Graphql Server running on http://localhost:${PORT}`));