import React from 'react';
import UsersWrapper from './UsersWrapper.jsx';
import {connect} from 'react-redux';
import API from '../../../API/api.js'; 
import {reqUsers} from './../../../redux/users-reducer.js';
import {changeFollow} from './../../../redux/users-reducer.js';
import {getFollows, getUsers, getPageSize, getTotalCount, getCurrentPage, getLoading, getFollowLoading, getName, getMail, getIsAuth, getId} from './../../../redux/users-selector.js';
let mapStateToProps = (state) => {
	console.log('mapStateToProps USERS');
	return {
		users: getUsers(state),
		pageSize: getPageSize(state), 
		totalCount: getTotalCount(state), 
		currentPage: getCurrentPage(state), 
		Loading: getLoading(state), 
		FollowLoading: getFollowLoading(state),
		isAuth: getIsAuth(state), 
		authId: getId(state), 
		follows: getFollows(state) 
	}
}



let mapDispatchToProps = (dispatch) => {

	return {
		follow: (userId) => {
			dispatch({type: 'FOLLOW', userId: userId});
		},
		unfollow: (userId) => {
			dispatch({type: 'UNFOLLOW', userId: userId});
		},
		setUsers: (users) => {
			dispatch({type: "SET-USERS", users: users}); 
		},
		changePage: (currentPage) => {
			dispatch({type: "SET-CURRENT-PAGE", currentPage: currentPage});
		},
		setTotalCount: (totalCount) => {
			dispatch({type: "SET-TOTAL-COUNT", totalCount: totalCount}); 
		},
		switchIsLoading: (isLoading) => {
			dispatch({type: "SWITCH-IS-LOADING", isLoading: isLoading}); 
		},
		reqUsers: (currentPage, pageSize, follows, isAuth) => { 
			dispatch(reqUsers(currentPage, pageSize, follows, isAuth));
		},
		changeFollow(text, authId, id){ 
			dispatch(changeFollow(text, authId, id));
		}
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersWrapper);
export default UsersContainer;