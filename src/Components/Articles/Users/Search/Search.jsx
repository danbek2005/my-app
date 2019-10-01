import React from 'react';
import classes from './Search.module.css';

let Search = (props) => {
	return (
		<div className={classes.Search}>
			<form>
				<label>Search: </label>
				<input type="text" />
			</form>
		</div>
		)
}

export default Search;