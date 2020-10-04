import express from "express";
import{ graphqlHTTP} from "express-graphql";
import schema from "./schema";
import { connect } from './DB';

const  app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello world'
    })
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}));

app.listen(3000, () => console.log('Servidor en en puerto 3000'));