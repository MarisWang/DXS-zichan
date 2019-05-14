import {createApolloFetch} from "apollo-fetch";
const uri = 'https://52.199.104.195:4000/graphql';

const apolloFetch=createApolloFetch({ uri });

export {uri,apolloFetch}