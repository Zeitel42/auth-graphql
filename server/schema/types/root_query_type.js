const { GraphQLString } = require("graphql");
const graphql = require("graphql");
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

module.exports = RootQueryType;
