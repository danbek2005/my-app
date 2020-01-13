import React from 'react';
import Info from './profile-left/Info.jsx';
import Posts from './profile-right/Posts.jsx';

var Profile = ({img, name, mail, id, ...props}) => {

	let addPost = (data) => {
		let arr = {
			...data,
			id: props.authId
		}
		props.addPost(arr);
	}

	return (
			<div className="main-profile d-flex">
				<Info img={img} name={name} mail={mail} id={id}/>
				<Posts img={img} 
					   updateLikesVal={props.updateLikesVal} 
					   deletePost={props.deletePost} 
					   authId={props.authId} 
					   profileId={props.profileId} 
					   updatePost={props.updatePost} 
					   name={name} 
					   isPostHave={props.isPostHave} 
					   id={id}
					   posts={props.posts} 
					   addPost={addPost}/>
			</div>
		);
	}

	export default Profile;
