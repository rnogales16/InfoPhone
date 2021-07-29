import React, { useState } from 'react';
import { login } from '../services/auth';
import './Signup';
import * as CONSTS from '../utils/consts';
import '../cssPages/LogIn.css'

function LogIn(props) {
	const { authenticate } = props;

	const initialState = {
		username: '',
		password: ''
	};

	const [formData, setFormData] = useState(initialState);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const credentials = {
			username: formData.username,
			password: formData.password
		};

		login(credentials).then((res) => {
			if (!res.status) {
				console.log('error');
			}
			localStorage.setItem(CONSTS.ACCESS_TOKEN, res.data.accessToken);
			authenticate(res.data.user);
			props.history.push('/');
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div class="login">
					<div class="login-screen">
						<div class="app-title">
							<h1>Login</h1>
						</div>
						<div class="login-form">
							<div class="control-group">
								<input 
									type="text" 
									name="username"
									class="login-field" 
									value={formData.username}
									onChange={handleChange}
									placeholder="username" 
									id="login-name"
									required
								/>
								<label class="login-field-icon fui-user" htmlFor='input-username'></label>
							</div>
							<div class="control-group">
								<input 
									type="password" 
									name="password"
									class="login-field" 
									value={formData.password}
									placeholder="password" 
									id="login-pass"
									onChange={handleChange}
									required
									minLength='8'
								/>
								<label class="login-field-icon fui-lock" htmlFor='input-password'></label>
							</div>
							<button class="btn btn-primary btn-large btn-block" type="submit">login</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default LogIn;
