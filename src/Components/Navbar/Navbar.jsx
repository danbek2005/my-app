import React from 'react';

import {NavLink} from 'react-router-dom';

import Login from './Login.jsx';

var Navbar = (props) => {
	return (
		<nav>
					{props.isAuth &&
						<div className="main-auth d-flex">
							<div className="auth-img">
								<img src={props.img} alt="user"/>
							</div>
							<span className="auth-name">{props.name}</span>
						</div>
					}
					{!props.isAuth &&
						<div className="main-auth d-flex">
							<Login formCheck={props.formCheck}/>
						</div>
					}
				<div className="main-menu d-flex">
					<div className="menu-item">
						<NavLink to="/profile" className="menu-item">Profile</NavLink>
					</div>
					<div className="menu-item">
						<NavLink to="/dialogs" className="menu-item">Messages</NavLink>
					</div>
					<div className="menu-item">
						<NavLink to="/users" className="menu-item">Users</NavLink>
					</div>
				</div>
				{props.isAuth &&
					<div className="auth-exit" onClick={props.logout}>
						<span className="logout_arrow"></span>{'<'} Logout
					</div>
				}
		</nav>
	)
}
export default Navbar;