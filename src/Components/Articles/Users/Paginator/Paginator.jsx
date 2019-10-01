import React, {useState} from 'react';
import classes from './Paginator.module.css';

export let Paginator = ({totalCount, pageSize, currentPage, changePage, portionSize = 5}) => {
	let pagesCount = Math.ceil(totalCount / pageSize);

	//<span className={currentPage == i ? classes.selectPage : null} onClick = {(e) => {changePage(e.target.innerHTML)}}>{i}</span>

	let pages = [];
	for(let i = 1; i <= pagesCount; i++){
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);

	let [portionNumber, setPortionNumber] = useState(1); 
	
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div class={classes.Paginator}>
		{(portionNumber > 1) &&
			<button class={classes.Paginator_leftButton} onClick={() => setPortionNumber(portionNumber - 1)}>{'<<< LEFT'}</button>
		}

		{[...pages].filter((page) => {
			if(page <= rightPortionPageNumber && page >= leftPortionPageNumber){
				return page;
			}

		}).map((page) => {
			return <span className={currentPage == page ? classes.selectPage : null} onClick = {(e) => {changePage(e.target.innerHTML)}}>{page}</span>
		})
		}

	{(portionNumber < portionCount) &&
		<button class={classes.Paginator_rightButton} onClick={() => setPortionNumber(portionNumber + 1)}>RIGHT >>></button>
	}
	</div>
	)
}