import {combineReducers, createStore, applyMiddleware} from 'redux';
import dialogsReducer from './dialogs-reducer.js';
import {ProfileReducer} from './profile-reducer.js';
import {UsersReducer} from './users-reducer.js';
import {AuthReducer} from './auth-reducer.js';
import {AppReducer} from './app-reducer.js';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
let state = combineReducers({
	profilePage: ProfileReducer,     // STATE { profilePage{...}, dialogPage{...} }
	dialogsPage: dialogsReducer,   // Сюда приходят изменённые state из reducer's
	usersPage: UsersReducer,
	auth: AuthReducer,
	form: formReducer,
	app: AppReducer
})
let store = applyMiddleware(thunk)(createStore)(state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//let store = createStore(state, applyMiddleware(thunk));


window.store = store;
console.log(store);

export default store;