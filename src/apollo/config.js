import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const httpLink = new HttpLink({
	uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2"
});

const link = ApolloLink.from([httpLink]);


const apolloClient = new ApolloClient({
	link,
	cache: new InMemoryCache()
});

export default apolloClient;
