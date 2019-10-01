
let data = {
			users: [
				{id: 1, name: 'Anna'},
				{id: 2, name: 'Vlad'},
				{id: 3, name: 'Masha'}],
			messages: [
				{
					id: 1,
					text: 'Hello', 
					user: 'Anna'
				},
				{
					id: 2, 
					text:'My name is Anna',
					user: 'Anna',
				},
				{id: 3, text:'I am from Russia', user: 'Anna'},
				{id: 4, text:'Lorem ipsum dolor sit amet.', user: 'me'}
			]
}

let dialogsReducer = (state = data, action) => { 
	switch(action.type){
		case 'ADD-MESSAGE': {
			return {
				...state,
				messages: [...state.messages, {id: 5, text: action.data.text, user: action.data.user}]
			}
		}
	}
	return state;
}
export default dialogsReducer;