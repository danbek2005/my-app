import React, {useEffect} from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import Users from './Users.jsx';
import FollowPreloader from './../../Common/Preloader/FollowPreloader.jsx';
import UserWrapper from './User/UserWrapper.jsx';

let UsersWrapper = (props) => {

	useEffect(() => {
		props.reqUsers(props.currentPage, props.pageSize, props.follows, props.isAuth);
	}, [props.currentPage]);



	if(props.users.length == 0){
		props.reqUsers(props.currentPage, props.pageSize, props.follows, props.isAuth);
	}

	let usersEl = [...props.users].map((user) => {
		let followElement = props.FollowLoading.status == true && props.FollowLoading.id == user.id ? <FollowPreloader /> : <button onClick={(e) => {
			props.changeFollow(e.target.innerHTML, props.authId, user.id);
		}}>{user.followed}</button>

		if(props.isAuth == false){
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
		<Users usersEl={usersEl} changeFollow={props.changeFollow} totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} changePage={props.changePage} />
	)
}

export default UsersWrapper;

