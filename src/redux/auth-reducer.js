import API from '../API/api.js'; 
import {stopSubmit} from 'redux-form';
import {auth_setUser, auth_delAuthInfo, auth_setAuthUser} from './dispatch-types.js';

let data = {
		id: null,
		name: null,
		isAuth: false,
		follows: null,
		errors: {
			name: null,
			mail: null,
			password: null
		}
}

export const AuthReducer = (state = data, action) => {

	switch(action.type){
		case 'SET-AUTH-USER': {
			return {
				...state,
				name: action.data.name,
				id: action.data.id,
				follows: action.data.follows,
				isAuth: true
			}
		}
		case "SET-FOLLOWS": {
			return {
				...state,
				follows: action.data
			}
		}
		case "SET-AUTH-ERRORS": {
			return {
				...state,
				errors: action.data
			}
		}
		case "DELETE-AUTH-INFO": {
			return {
				id: null,
				name: null,
				isAuth: false,
				follows: null,
				errors: {
					name: null,
					mail: null,
					password: null
				}
			}
		}
	}

	return state;
}

let cookieCreator = (obj) => {
	for(let key in obj){
		document.cookie = key + '=' + obj[key] + ";";
	}
}

export const formCheck = (data) => async (dispatch) => {
	let res = await new API().auth(data);
	if (res.data.status == 'ok') {
		dispatch(auth_setUser(data, res));
		cookieCreator({
			name: data.name,
			id: res.data.id,
			follows: res.data.follows
		});
	}
	else if(res.data.status == 'error'){
		let obj = {}
		if(res.data.messages.name){
			obj.name = 'Such user does not exist';
		}
		if(res.data.messages.mail || res.data.messages.password){
			obj._error = "Mail or Password is wrong";
		}
		dispatch(stopSubmit('login', obj));
	}
}

export const logout = () => {
	return (dispatch) => {
		dispatch(auth_delAuthInfo());
		deleteAllCookies();
	}
}
export const isCookie = () => {
	return (dispatch) => {
		if (getCookie(['id'])) {
			let data = getCookie(['id', 'name', 'follows']);
			dispatch(auth_setAuthUser(data));	
			return true;	
		}else{
			return false;
		}
	}	
}

let getCookie = (arr, obj = {}) => {
	for(let i = 0; i < arr.length; i++){
		let value = "; " + document.cookie;
  		let parts = value.split("; " + arr[i] + "=");
  		if(parts.length == 2){
  			obj[arr[i]] = parts.pop().split(";").shift()
  		}else{
  			return false;	
  		}
	}
	return obj;
}

let deleteAllCookies = () => {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}