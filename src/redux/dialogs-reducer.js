
let data = {
			users: [
				{id: 2, login: 'Anna'},
				{id: 2, login: 'Vlad'},
				{id: 2, login: 'Masha'}],
			messages: [
				{
					id: 2,
					text: 'Hello', 
					login: 'Anna'
				},
				{
					id: 2, 
					text:'My name is Anna',
					login: 'Anna',
				},
				{id: 2, text:'I am from Russia', login: 'Anna'},
				{id: 1, text:'Lorem ipsum dolor sit amet.', login: 'dan_bek'}
			]
}

let dialogsReducer = (state = data, action) => { 
	switch(action.type){
		case 'ADD-MESSAGE': {
			return {
				...state,
				messages: [...state.messages, {id: action.data.id, text: action.data.text, login: action.data.login}]
			}
		}
	}
	return state;
}
export default dialogsReducer;