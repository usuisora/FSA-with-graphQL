const express = require("express");
const { postgraphile } = require("postgraphile");
require('dotenv').config()
const cors=require('cors')
const graphqlHTTP = require('express-graphql');


const app = express();


app.use(postgraphile(process.env.DATABASE_URL,null, {
    graphiql: true,
    enableCors: true
}));

app.use(cors())



 
app.use('/graphql', graphqlHTTP({
  graphiql: true
}));
 
app.listen(process.env.PORT );
