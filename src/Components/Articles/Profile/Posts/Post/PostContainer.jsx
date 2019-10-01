import React, {useState, useEffect} from 'react';
import Post from './Post.jsx';

let PostContainer = (props) => {
	var [editMode, setEditMode] = useState(false),
		[LocalPostText, setLocalPostText] = useState(props.text);

	useEffect(() => {
		setLocalPostText(props.text);
	}, [props.text]);

	let newLocalPostText = React.createRef();

	let activeEditMode = () => {
		if(props.authId != props.profileId){
			return false;
		}
		setEditMode(true);
	}

	let deactiveEditMode = () => {
		if(LocalPostText != props.text){
			props.updatePost(LocalPostText, props.postId);
		}
		setEditMode(false);
	}

	let updateLocalPostText = () => {
		setLocalPostText(newLocalPostText.current.value);
	}

	return  <Post img={props.img}
				  user={props.user}
				  editMode={editMode}
				  activeEditMode={activeEditMode}
				  newLocalPostText={newLocalPostText}
				  updateLocalPostText={updateLocalPostText}
				  deactiveEditMode={deactiveEditMode}
				  LocalPostText={LocalPostText}
				  likes={props.likes}
				  dislikes={props.dislikes}
				  deletePost={props.deletePost}
				  postId={props.postId}
				  updateLikesVal={props.updateLikesVal}
				  users={props.users}
				  authId={props.authId}
				  profileId={props.profileId}
			/>
}
export default PostContainer;