import React from 'react';
import Avatar from './avatar/Avatar.jsx';
import Posts from './Posts/Posts.jsx';
import classes from './Profile.module.css';

var Profile = (props) => {

	let addPost = (data) => {
		let arr = {
			...data,
			id: props.authId
		}
		props.addPost(arr);
	}

	return (
			<div className={classes.Profile}>
				<Avatar name={props.name} surname={props.surname} age={props.age} city={props.city} country={props.country} img={props.img}/>
				<Posts updateLikesVal={props.updateLikesVal} deletePost={props.deletePost} authId={props.authId} profileId={props.profileId} updatePost={props.updatePost} name={props.name} isPostHave={props.isPostHave} img={props.img} posts={props.posts} addPost={(data) => {addPost(data)}}/>
			</div>
		);
	}

	export default Profile;
