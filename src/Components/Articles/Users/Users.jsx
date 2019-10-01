import React from 'react';
import classes from './Users.module.css';
import {Paginator} from './Paginator/Paginator.jsx';
import Preloader from './../../Common/Preloader/Preloader.jsx';
import Search from './Search/Search.jsx';

let Users = ({usersEl, totalCount, pageSize, currentPage, changePage}) => {


	return (
		<div className={classes.UsersPage}>
			<Search />
			<div className={classes.Users}>
				<div className={classes.Paginator}>
					<Paginator totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} changePage={changePage}/>
				</div>
				{usersEl || <Preloader />}
			</div>
			
		</div>
	)
}

export default Users;