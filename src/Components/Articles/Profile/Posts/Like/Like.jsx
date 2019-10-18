import React from 'react';
import classes from './Like.module.css';
var Like = ({postId, users, authId, updateLikesVal, likes, dislikes}) => {
    debugger;
	let obj = {
        id: postId, // !!!!!
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
    let LikeButtonClass = actions.like == 'ADD' ? classes.default_Button : classes.active_Button;
    let DislikeButtonClass = actions.dislike == 'ADD' ? classes.default_Button : classes.active_Button;

    return (
        <div className={classes.Like}>
            <button onClick={() => {updateLikesVal({...obj, type: 'LIKE', action: actions.like})}} class={LikeButtonClass}>Like</button>
            <button onClick={() => {updateLikesVal({...obj, type: 'DISLIKE', action: actions.dislike})}} class={DislikeButtonClass}>DisLike</button>
            <span clssName={classes.Like_Assess}>
                {' ' + (likes + (dislikes * -1))}
            </span>
        </div>
    )
}
export default Like;