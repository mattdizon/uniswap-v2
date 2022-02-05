import gql from 'graphql-tag';

export const LIST_TOKENS = gql`
query getTokens{ 
		tokens(orderBy: tradeVolume orderDirection:desc, first: 5){
			id
			name
			symbol
			tradeVolume
		}
	}	
`;
