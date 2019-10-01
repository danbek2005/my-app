import React from 'react';
import classes from './Posts.module.css';
import PostContainer from './Post/PostContainer.jsx';
import PostForm from './PostForm.jsx';
export default React.memo((props) => {
	if(props.isPostHave){
		var postElements = props.posts.map(dialog => <PostContainer updateLikesVal={props.updateLikesVal} deletePost={props.deletePost} authId={props.authId} profileId={props.profileId} postId={dialog.postId} users={dialog.users} updatePost={props.updatePost} img={props.img} text={dialog.text} user={props.name} likes={dialog.likes} dislikes={dialog.dislikes}/>);
	}
	let postFormEl = props.profileId == props.authId ? <PostForm addPost={props.addPost}/> : null

	return (
		<div className={classes.Posts}>
			{postFormEl}
			{postElements || null}
		</div>
	)
}, (oldProps, newProps) => {
	if(newProps == oldProps){
		return true;
	}
	return false;
});