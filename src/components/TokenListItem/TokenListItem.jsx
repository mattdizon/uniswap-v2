import React from 'react';
import { ListItem, Box,  Checkbox, ListItemButton, ListItemAvatar, ListItemText, } from '@mui/material';

export const TokenListItem = ({token, handleClick}) => {
	const handleClickEvent = () => handleClick(token)

	return(
		<ListItem
		secondaryAction={
			<Checkbox
				edge="end"
			/>
		}
		disablePadding
		onClick={handleClickEvent}
	>
		<ListItemButton>
			<ListItemAvatar>
				<Box style={{backgroundColor: 'gray', textAlign: 'center'}}>
					{token.symbol}
				</Box>
			</ListItemAvatar>
			<ListItemText primary={token.name} sx={{marginLeft: '12px'}}/>
		</ListItemButton>
	</ListItem>
	)
}
