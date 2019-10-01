import {app_initialSuccess} from './dispatch-types.js';
let data = {
	initial: false
}

export const AppReducer = (state = data, action) => {

	switch(action.type){
		case 'INITIALIZATION-SUCCESS': {
			return {
				...state,
				initial: true
			}
		}
	}
	return state;
}



export const initializeApp = (isCookie) => {
	return (dispatch) => {
		let isAuth = isCookie();
		if(isAuth || !isAuth){
			dispatch(app_initialSuccess());
		}
	}
}