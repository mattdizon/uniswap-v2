import { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { map } from 'lodash'
import { List, Tabs, Tab, CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import { TokenListItem } from './components/TokenListItem/TokenListItem'
import { LIST_TOKENS } from './gql/queries/tokens'

export const App = () => {
	const [tokens, setTokens] = useState([])

	const {data, loading} = useQuery(LIST_TOKENS)
	const [tabValue, setTabValue] = useState(0)
	const [selectedToken, setSelectedToken] = useState()

	useEffect(() => {
		if(!loading){
			setTokens(data.tokens)
		}
	},[loading])

	useEffect(() => {
		console.log(selectedToken)
	},[selectedToken])
	
	const renderList = () => (<List>
		{map(tokens, (token) => <TokenListItem token={token} handleClick={setSelectedToken}/>)}
	</List>)

	const a11yProps = (index) => {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		}
	}

	const handleChange = (event, newValue) => {
		setTabValue(newValue);
	};
	return (
		<div>
			{
				!loading 
					? <Box sx={{display: 'flex', flexDirection: 'column'}}>
							<h1>Top 5 Tokens by Trade Volume in USD</h1>
							{renderList()}
						{	
							selectedToken
							? <>
								<h2>Show Chart For {selectedToken.name}</h2>
								<Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
									<Tab label="Hourly" {...a11yProps(0)} />
									<Tab label="Daily" {...a11yProps(1)} />
									<Tab label="Monthly" {...a11yProps(2)} />
								</Tabs>
							</>
							: <h2>Select a Token to see the Total Liquidity in USD</h2>
						}
					</Box>
					: <CircularProgress />
			}
		</div>
	);
};
