import React, {useEffect} from 'react';
import classes from './Users.module.css';
import Users from './Users.jsx';
import FollowPreloader from './../../Common/Preloader/FollowPreloader.jsx';
import UserWrapper from './User/UserWrapper.jsx';

let UsersWrapper = ({users, reqUsers, currentPage, pageSize, follows, isAuth, FollowLoading, changeFollow, authId, totalCount, changePage}) => {

	useEffect(() => {
		reqUsers(currentPage, pageSize, follows, isAuth);
	}, [currentPage]);



	if(users.length == 0){
		reqUsers(currentPage, pageSize, follows, isAuth);
	}

	let usersEl = [...users].map((user) => {
		let followElement = FollowLoading.status == true && FollowLoading.id == user.id ? <FollowPreloader /> : <button onClick={(e) => {
			changeFollow(e.target.innerHTML, authId, user.id);
		}}>{user.followed}</button>

		if(isAuth == false){
			followElement = null;
		}

		return <UserWrapper id={user.id} 
							img={'./files/' + user.img} 
							fullname={`${user.fullname.name}` + ' ' + `${user.fullname.lastname}`} 
							age={user.age} 
							location={user.location.city + ' ' + user.location.country}
							followElement={followElement} />
	})

	return (
		<Users usersEl={usersEl} changeFollow={changeFollow} totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} changePage={changePage} />
	)
}

export default UsersWrapper;

