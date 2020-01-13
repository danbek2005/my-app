import API from './../API/api.js';
import {profile_setProfilePage,
		profile_setProfilePosts,
		profile_setNewPostVal,
		profile_delPost,
		profile_updatePostAssess,
		profile_addPost} from './dispatch-types.js';
let data = {
		user: {
			id: null,
			name: null,
			mail: null,
			img: null
		},
		posts: [],
		isPostHave: false
}

export const ProfileReducer = (state = data, action) => { //state = ProfilePage
	switch(action.type){
		case 'ADD-POST': {
			return {
				...state,
				posts: [
					...state.posts,
					action.data
				],
				isPostHave: true
			}
			
		}
		case 'SET-PROFILE-ID': {
			return {
				...state,
				user: {
					...state.user,
					id: action.data
				}
			}
		}
		case 'SET-PROFILE-PAGE': {
			return {
				...state,
				user: {
					id: action.data.id,
					name: action.data.name,
					mail: action.data.mail,
					img: action.data.img
				},
				isPostHave: false,
				posts: []
			}
		}
		case 'SET-PROFILE-POSTS': {
			return {
				...state,
				posts: action.data,
				isPostHave: true
			}
		}
		case 'SET-NEW-POST-VALUE': {

			let newPosts = [];

			for (var i = 0; i < state.posts.length; i++) {
				if(state.posts[i] && state.posts[i].postId == action.data.postId){
					newPosts[i] = state.posts[i];
					newPosts[i].text = action.data.text;
					newPosts[i].postId = action.data.postId;
				}else{
						newPosts[i] = state.posts[i];
				}
			}
			return {
				...state,
				posts: newPosts
			}
		}
		case 'DELETE-POST': {
			let newPosts = [];
			for (var i = 0; i < state.posts.length; i++) {
				if(state.posts[i]){
					if(state.posts[i].postId != action.data){	
					newPosts[i] = state.posts[i];
					}
				}
			}
			return {
				...state,
				posts: newPosts
			}	
		}

		case 'UPDATE-POST-LIKE-VAL': {
			return {
				...state,
				posts: [...state.posts].map((post) => {
					debugger;
					if(action.id == post.postId){
						debugger;
						return {
							...post,
							...action.data
						}
					}
					return post
				})
			}
		}

		}



	return state; 
}

export const getProfile = (url, authId) => async (dispatch) => {
		var id = url.split("/")[2];
		if(!id){
			id = authId;
		}
		let res = await new API().getProfile(id);
  		dispatch(profile_setProfilePage({...res.data, id: id}));
}

/*------------------------
	 TRANSFORM FUNCTION
  ------------------------*/

let transUsersАsses = (Assessment) => {
	if(Assessment == null){
		return [];
	}
	Assessment = Assessment.split(';');
	Assessment.splice(-1, 1);
	if(Assessment.length == 0){
		return null;
	}
	return Assessment;
}


export const getPosts = (id) => async (dispatch) => {
	let res = await new API().getPosts(id);
	let data = res.data;
	if(data.length != 0){
		data = data.map((post) => {
			return {
				...post,
				users: {
					like: transUsersАsses(post.users.like),
					dislike: transUsersАsses(post.users.dislike)
				}
			}
		})
		dispatch(profile_setProfilePosts(data));
	}
}

export const setPost = (data) => async (dispatch) => {
	let res = await new API().setPost(data.id, data.post);
	debugger;
	if(res.data.status == 'ok'){
		dispatch(profile_addPost(data, res));
	}
}

export const updatePost = (text, postId) => async (dispatch) => {
	let res = await new API().updatePost(text, postId);
	dispatch(profile_setNewPostVal(res.data));
}

export const deletePost = (postId) => async (dispatch) => {
	dispatch(profile_delPost(postId));
	let res = await new API().deletePost(postId);
	debugger;
}

export const updateLikesVal = (data) => async (dispatch) => {
	let res = await new API().updateLikesVal(data);
	let newData = {
		...res.data,
		users: {
			like: transUsersАsses(res.data.users.like),
			dislike: transUsersАsses(res.data.users.dislike)
		}
	}
	dispatch(profile_updatePostAssess(data, newData));
}