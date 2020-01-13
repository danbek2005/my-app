import React from 'react';
import {Paginator} from './Paginator/Paginator.jsx';
import Preloader from './../../Common/Preloader/Preloader.jsx';
import Search from './Search/Search.jsx';

let Users = ({usersEl, totalCount, pageSize, currentPage, changePage}) => {


	return (
		<div>
{/*			<Search />*/}
				<Paginator totalCount={totalCount}
						   pageSize={pageSize} 
						   currentPage={currentPage} 
						   changePage={changePage}/>
				<div className="main-users">
					{usersEl || <Preloader />}
				</div>		   
		</div>
	)
}

export default Users;