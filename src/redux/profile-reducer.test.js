import {ProfileReducer, updateLikesVal} from './profile-reducer.js';
import React from 'react';

let state = {
	posts: [
		{text: 'Hello', likes: 10, postId: 1},
		{text: 'Goodbuy', likes: 20, postId: 2}
	]
}

it('Add new Post', () => {

	let newState = ProfileReducer(state, {type: 'ADD-POST', data: {text: 'Hello', likes: 0, postId: 3}});

	expect(newState.posts[2].text).toBe('Hello');

})

it('Server work', () => {

	let result = updateLikesVal({action: 'add', authId: 1, type: 'LIKE', dislikes: 0, id: 106, likes: 0, users: {like: null, dislike: null}});

	expect(result).toBe('ok');

});