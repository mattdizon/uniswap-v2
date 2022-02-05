import gql from 'graphql-tag';

export const LIST_TOKENS = gql`
query getTokens{ 
		tokens(orderBy: tradeVolume orderDirection:desc, first: 5){
			id
			name
			symbol
			tradeVolume
			totalLiquidity
		}
	}	
`;

export const TOKEN_DAILY = gql`
	query{
		tokenDayDatas(orderBy: date, orderDirection: asc,
			where: {
				token
			}){
			id
			date
			priceUSD
			dailyVolumeUSD
		}
	}
`
