import React from 'react';
import Like from './../Like/Like.jsx';

let Post = (props) => {
	return  <div className="post d-flex flex-column">
				<div className="post-header d-flex">
					<div className="post-img">
						<img src={props.img}/>
					</div>
					<div className="post-user">
							{props.user}
					</div>
					{props.profileId == props.authId &&
						<div className='delete-btn' onClick={() => {props.deletePost(props.postId)}}>
							<img src="http://localhost:3000/files/deleteButton.png" />
						</div>
					}
				</div>
				<div className="post-body">
					{!props.editMode &&
					<div className="post-text" onClick={() => {props.activeEditMode()}}>
						{props.LocalPostText}
					</div>
					}
					{props.editMode &&
						<input autoFocus={true}
							   ref={props.newLocalPostText}
							   onChange={() => {props.updateLocalPostText()}}
							   onBlur={() => {props.deactiveEditMode()}}
							   value={props.LocalPostText}
							   className="post-edit"/>
					}
				</div>
				<div className="post-footer">
				<Like likes={props.likes} 
						  dislikes={props.dislikes} 
						  users={props.users} 
						  authId={props.authId}  
						  updateLikesVal={props.updateLikesVal} 
						  postId={props.postId}/>
				</div>
		</div>
}

export default Post; 