import Dialogs from './Dialogs.jsx';
import {connect} from 'react-redux';
import withAuthRedirect from './../../../HOC/withAuthRedirect.jsx';
import {compose} from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		id: state.auth.id,
		name: state.auth.name
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		SendMessage: (data) => {
			debugger;
			dispatch({type: 'ADD-MESSAGE', data: {text: data.text, id: data.id, login: data.login}})
		}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	connect((state) => {
		return {
			isAuth: state.auth.isAuth
		}
	}),
	withAuthRedirect
	)(Dialogs);