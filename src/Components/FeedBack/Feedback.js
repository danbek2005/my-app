import React from 'react';
import classes from './FeedBack.module.css';
var FeedBack = () => {
	return (
		<div className={classes.feedback}>
			<div className={classes.feedback_item}>
				<img className={classes.feedback_img} src="http://localhost:3000/files/Phone.png" alt="Phone"/>
			</div>
			<div className={classes.feedback_item}>
				<img className={classes.feedback_img} src="http://localhost:3000/files/YouTube.png" alt="YouTube"/>
			</div>
			<div className={classes.feedback_item}>
				<img className={classes.feedback_img} src="http://localhost:3000/files/Instagram.png" alt="Instagram"/>
			</div>
		</div>
	)
}
export default FeedBack;
