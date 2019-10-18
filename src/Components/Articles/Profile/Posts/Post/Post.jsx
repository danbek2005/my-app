import React from 'react';
import classes from './Post.module.css';
import Like from './../Like/Like.jsx';

let Post = (props) => {
	return  <div className={classes.Post}>
		    	<div className={classes.Post_Img}>
					<img src={'http://localhost:3000/files/avatar' + props.img + ('.jpg' || '.png')}/>
				</div>
				<div className={classes.Post_Body}>
					<div className={classes.Post_User}>
						{props.user}
					</div>
					{!props.editMode &&
					<div className={classes.Post_Text} onClick={() => {props.activeEditMode()}}>
						{props.LocalPostText}
					</div>
					}
					{props.editMode &&
						<input autoFocus={true} ref={props.newLocalPostText} onChange={() => {props.updateLocalPostText()}} onBlur={() => {props.deactiveEditMode()}} value={props.LocalPostText}/>
					}
					<Like likes={props.likes} dislikes={props.dislikes} users={props.users} authId={props.authId}  updateLikesVal={props.updateLikesVal} postId={props.postId}/>
				</div>
				{props.profileId == props.authId &&
				<div className={classes.deleteButton} onClick={() => {props.deletePost(props.postId)}}>
					<img src="http://localhost:3000/files/deleteButton.png" />
				</div>
				}
				
		</div>
}

export default Post; 