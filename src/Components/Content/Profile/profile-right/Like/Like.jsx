import React from 'react';
var Like = ({postId, users, authId, updateLikesVal, likes, dislikes}) => {
	let obj = {
        id: postId,
        likes: likes,
        dislikes: dislikes,
        users: {...users},
        authId: authId
    };
    
    let isHaveLike = users.like == null ? false : users.like.indexOf(authId) != -1;
    let isHaveDisLike = users.dislike == null ? false : users.dislike.indexOf(authId) != -1;

    let actions = {
    	like: isHaveLike ? 'DELETE' : 'ADD',
    	dislike: isHaveDisLike ? 'DELETE' : 'ADD'
    };

    return (
        <div className='post-like d-flex'>
            <img onClick={() => {updateLikesVal({...obj, type: 'LIKE', action: actions.like})}}
                 src="http://localhost:3000/files/like-img.png" />
            <img 
                 onClick={() => {updateLikesVal({...obj, type: 'DISLIKE', action: actions.dislike})}} 
                 src="http://localhost:3000/files/dislike-img.png" />

            <span className="like-access">
                {' ' + (Number(likes) + (Number(dislikes) * -1))}
            </span>
        </div>
    )
}
export default Like;