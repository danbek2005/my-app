import React, {useEffect} from 'react';
import Profile from './Profile.jsx';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfile, getPosts, setPost, updatePost, deletePost, updateLikesVal} from './../../../redux/profile-reducer';
import withAuthRedirect from './../../../HOC/withAuthRedirect.jsx';
import {compose} from 'redux';


const mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage,
		authId: state.auth.id,
		id: state.profilePage.user.id,
		isAuth: state.auth.isAuth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (data) => {
			dispatch(setPost(data));
		},
		getProfile: (url, authId) => {
			dispatch(getProfile(url, authId));
		},
		getPosts: (id) => {
			dispatch(getPosts(id));
		},
		updatePost: (text, postId) => {
			dispatch(updatePost(text, postId));
		},
		deletePost: (postId) => {
			dispatch(deletePost(postId));
		},
		updateLikesVal: (data) => {
			dispatch(updateLikesVal(data));
		}
	}
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps), 
	withRouter,
	withAuthRedirect
)((props) => {
	useEffect(() => {
		props.getProfile(props.location.pathname, props.authId);
	}, [props.location.pathname]);

	if(!props.profilePage.isPostHave && props.profilePage.user.id){
		props.getPosts(props.profilePage.user.id);
	}
			return (
				<Profile 
					id={props.id}
					updateLikesVal={props.updateLikesVal} 
					profileId={props.profilePage.user.id} 
					deletePost={props.deletePost} 
					authId={props.authId} 
					updatePost={props.updatePost} 
					isPostHave={props.profilePage.isPostHave} 
					posts={props.profilePage.posts} 
					name={props.profilePage.user.name} 
					mail={props.profilePage.user.mail} 
					addPost={props.addPost}
					img={props.profilePage.user.img}/>
			);
});
