

/*------------------------------------
		AUTH
------------------------------------*/

export const app_initialSuccess = () => {
	return {
		type: 'INITIALIZATION-SUCCESS'
	}
};


/*------------------------------------
		AUTH
------------------------------------*/

export const auth_setUser = (data, res) => {
	debugger;
	return {
			type: 'SET-AUTH-USER',
			data: {
				...data,
				id: res.data.id,
				follows: res.data.follows,
				img: res.data.img
			}
	}
}

export const auth_delAuthInfo = () => {
	return {
		type: 'DELETE-AUTH-INFO'
	}
}

export const auth_setAuthUser = (data) => {
	return {
		type: 'SET-AUTH-USER',
		data: data
	}
}


/*------------------------------------
		PROFILE
------------------------------------*/


export const profile_setProfilePage = (data) => {
	return {
		type: 'SET-PROFILE-PAGE',
		data: data
	}
}

export const profile_setProfilePosts = (data) => {
	return {
		type: 'SET-PROFILE-POSTS',
		data: data
	}
}

export const profile_setNewPostVal = (data) => {
	return {
		type: 'SET-NEW-POST-VALUE', 
		data: data
	}
}

export const profile_delPost = (postId) => {
	return {
		type: 'DELETE-POST', 
		data: postId
	}
}

export const profile_updatePostAssess = (data, newData) => {
	return {
		type: 'UPDATE-POST-LIKE-VAL',
		data: newData, 
		id: data.id
	}
}

export const profile_addPost = (data, res) => {
	return {
			type: 'ADD-POST', data: {
			text: data.post,
			likes: 0,
			dislikes: 0,
			users: {
				like: [],
				dislike: []
			},
			postId: res.data.postId,
	}}
}


/*------------------------------------
		USERS
------------------------------------*/


export const users_switchLoading = (Loading) => {
	return {type: "SWITCH-LOADING", Loading: Loading}
}

export const users_setUsers = (data) => {
	return {type: "SET-USERS", users: data}
}

export const users_setTotalCount = (totalCount) => {
	return {type: "SET-TOTAL-COUNT", totalCount: totalCount}
}

export const users_switchFollLoad = (FollowLoading ,id) => {
	return {type: "SWITCH-FOLLOW-LOADING", FollowLoading: {status: FollowLoading, id: id}}
}

export const users_unFollow = (id) => {
	return {type: 'UNFOLLOW', userId: id}
}

export const users_follow = (id) => {
	return {type: 'FOLLOW', userId: id}
}

export const users_setFollows = (data) => {
	return {type: 'SET-FOLLOWS', data: data}
}







