import React from 'react';
import classes from './FeedBack.module.css';
import Phone from './../../../public/files/Phone.png';
import YouTube from './../../../public/files/YouTube.png';
import Instagram from './../../../public/files/Instagram.png';
var FeedBack = () => {
	return (
		<div className={classes.feedback}>
			<div className={classes.feedback_item}>
				<img className={classes.feedback_img} src={Phone} alt="Phone"/>
			</div>
			<div className={classes.feedback_item}>
				<img className={classes.feedback_img} src={YouTube} alt="YouTube"/>
			</div>
			<div className={classes.feedback_item}>
				<img className={classes.feedback_img} src={Instagram} alt="Instagram"/>
			</div>
		</div>
	)
}
export default FeedBack;
