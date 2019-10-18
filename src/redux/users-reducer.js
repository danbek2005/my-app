import API from '../API/api.js';
import {updateObjectInArr} from './../Until/Object-helpers.js';
import {users_switchLoading,
		users_setUsers,
		users_setTotalCount,
		users_switchFollLoad,
		users_unFollow,
		users_follow,
		users_setFollows} from './dispatch-types.js';

let data = {
		users: [],
		pageSize: 1,
		totalCount: 10,
		currentPage: 1,
		Loading: false,
		FollowLoading: {
			status: false,
			id: null
		}
}

export const UsersReducer = (state = data, action) => {

	switch(action.type){
		case 'FOLLOW': {
			return {
				...state,
				 users: updateObjectInArr(state.users, 'id', action.userId, {followed: 'Follow'})
			}
		}
		case 'UNFOLLOW':
			return {
				...state,
				 users: updateObjectInArr(state.users, 'id', action.userId, {followed: 'UnFollow'})
			}
		case 'SET-USERS':	
			return {
			 	...state,
			 	users: [...action.users]
			}
		case 'SET-TOTAL-COUNT':
			return {
				...state,
				totalCount: action.totalCount	
			}
		case 'SET-CURRENT-PAGE':
			return {
				...state,
				currentPage: action.currentPage
		}
		case 'SWITCH-LOADING': {
			return {
				...state,
				isLoading: action.Loading
			}
		}
		case 'SWITCH-FOLLOW-LOADING': {
			return {
				...state,
				FollowLoading: action.FollowLoading
			}
		}
	}
	return state;
}


export const reqUsers = (currentPage, pageSize, follows, isAuth) => async (dispatch) => {
	dispatch(users_switchLoading(true)); 
	let res = await new API().reqUsers(currentPage, pageSize);
	let data = res.data;

	var length = data.users.length, i = 0;
	while(i < length){
		if(data.users[i] === null){
			data.users.splice(i, 1);
			i = -1;
		}
		i++;
	}
	if(isAuth){
		for (var i = 0; i < data.users.length; i++) {
			var isFollow = false;
			for (var a = 0; a < follows.length; a++) {
				if(data.users[i].id == follows[a]){
					data.users[i].followed = 'UnFollow';
					var isFollow = true;
				}
			}
			if(!isFollow){
				data.users[i].followed = 'Follow';
			}

		}			
	}
	dispatch(users_setUsers(data.users)); 
	dispatch(users_setTotalCount(data.totalCount)); 
	dispatch(users_switchLoading(false)); 
}

export const changeFollow = (text, authId, id) => async (dispatch) => {

	dispatch(users_switchFollLoad(true, id)); 

	text == 'Follow' ? dispatch(users_unFollow(id)) : dispatch(users_follow(id));

	let res = await new API().changeFollow(authId, id, text);

	dispatch(users_switchFollLoad(false, id)); 

	document.cookie = "follows="+res.data.follows+"; path=/;";

	dispatch(users_setFollows(res.data.follows));
}


