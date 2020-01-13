import React, {useState} from 'react';

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
		<div className="paginator d-flex">
		{(portionNumber > 1) &&
			<button className="paginator-left-btn" 
					onClick={() => setPortionNumber(portionNumber - 1)}>
					{'<<< LEFT'}
			</button>
		}
		<ul className="paginator-pages d-flex">
			{[...pages].filter((page) => {
			if(page <= rightPortionPageNumber && page >= leftPortionPageNumber){
				return page;
			}

			}).map((page) => {
				return <li className={currentPage == page ? 'paginator-select-page': 'paginator-default-page'} 
					   	   onClick = {(e) => {changePage(e.target.innerHTML)}}>{page}</li>
				})
			}
		</ul>

	{(portionNumber < portionCount) &&
		<button className="paginator-right-btn" 
				onClick={() => setPortionNumber(portionNumber + 1)}>
				{'RIGHT >>>'}
		</button>
	}
	</div>
	)
}