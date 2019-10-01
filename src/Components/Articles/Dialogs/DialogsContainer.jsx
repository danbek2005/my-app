import Dialogs from './Dialogs.jsx';
import {connect} from 'react-redux';
import withAuthRedirect from './../../../HOC/withAuthRedirect.jsx';
import {compose} from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		SendMessage: (data) => {
			console.log(data);
			dispatch({type: 'ADD-MESSAGE', data: {text: data.message, user: 'me'}})
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