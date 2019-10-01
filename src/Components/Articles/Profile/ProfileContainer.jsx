import React, {useEffect} from 'react';
import Profile from './Profile.jsx';
import classes from './Posts/Posts.module.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfile, getPosts, setPost, updatePost, deletePost, updateLikesVal} from 'C:/Users/danbe/Downloads/my-app/src/redux/profile-reducer.js';
import withAuthRedirect from './../../../HOC/withAuthRedirect.jsx';
import {compose} from 'redux';
import Preloader from './../../Common/Preloader/Preloader.jsx';

export default compose(
	connect((state) => {
	return {
		profilePage: state.profilePage,
		authId: state.auth.id
	}
}, (dispatch) => {
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
}), // 4
	withRouter, // 3
	connect((state) => { // 2
		return {
			isAuth: state.auth.isAuth
		}
	}),
	withAuthRedirect // 1 Security
)((props) => {
	useEffect(() => {
		props.getProfile(props.location.pathname, props.authId);
	}, [props.location.pathname]);
	
	if(!props.profilePage.isPostHave && props.profilePage.user.id){
		props.getPosts(props.profilePage.user.id);
	}
			return (
				<Profile updateLikesVal={props.updateLikesVal} profileId={props.profilePage.user.id} deletePost={props.deletePost} authId={props.authId} updatePost={props.updatePost} isPostHave={props.profilePage.isPostHave} posts={props.profilePage.posts} name={props.profilePage.user.name} surname={props.profilePage.user.surname} age={props.profilePage.user.age} city={props.profilePage.user.location.city} country={props.profilePage.user.location.country} img={props.profilePage.user.img} addPost={props.addPost}/>
			);
});