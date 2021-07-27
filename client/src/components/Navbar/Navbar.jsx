import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
	return (
		<nav>
			<Link to={'/'} className='nav__projectName'>
				Your app name
			</Link>

			<div className='nav__authLinks'>
				{props.user ? (
					<>
						<Link to={'/phones/new'} className='authLink'>
							Create new phone
						</Link>
						<button className='nav-logoutbtn' onClick={props.handleLogout}>
							Logout
						</button>
					</>
				) : (
					<>
						<Link to={'/auth/signup'} className='authLink'>
							Signup
						</Link>
						<Link to={'/auth/login'} className='authLink'>
							Log In
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
