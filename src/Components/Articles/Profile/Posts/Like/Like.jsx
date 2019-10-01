import React from 'react';
import classes from './Like.module.css';
var Like = ({postId, users, authId, updateLikesVal, likes, dislikes}) => {
	let obj = {
        id: postId,
        likes: likes,
        dislikes: dislikes,
        users: {...users},
        authId: authId
    };

    let actions = {
    	like: users.like == authId ? 'DELETE' : 'ADD',
    	dislike: users.dislike == authId ? 'DELETE' : 'ADD'
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