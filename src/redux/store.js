let store = {
	_state: {
		profilePage: {
		posts: [
			{id: 1, text: 'Hello', user: 'danil', like: 122},
			{id: 2, text: 'Whats up, Guys?', user: 'danil', like: 181},
			{id: 3, text: 'Look at this text: ', user: 'danil', like: 19},
			{id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user: 'danil', like: 311}],
		newPostText: ''
		},
		dialogsPage: {
			users: [
				{id: 1, name: 'Anna'},
				{id: 2, name: 'Vlad'},
				{id: 3, name: 'Masha'}],
			messages: [
				{id: 1, text: 'Hello'},
				{id: 2, text:'My name is Anna'},
				{id: 3, text:'I am from Russia'},
				{id: 4, text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}],
			newMessageText: ''
		}
	},
		renderDOM: function(){
			console.log('Hello!');
		},
		subscribe: function(observer){
			this.renderDOM = observer;
		},
		getState: function(){
			return this._state;
		},
	dispatch: function(action){
		switch(action.type){
			case 'GET-STATE':
				return this.getState();
				break;
			case 'SUBSCRIBE':
				this.renderDOM = action.data;
				break;
			case 'RENDER-DOM':
				this.renderDOM();
		}
		
	}

}
export default store;