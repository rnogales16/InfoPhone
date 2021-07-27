import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// the protected route component must take a user in order to check if the user is authenticated or not. If not moves the user to the login page
const ProtectedRoute = ({
	user,
	exact,
	to,
	path,
	component,
	...componentProps
}) => {
	const Component = component;
	if (!user) {
		return <Redirect to={'/auth/login'} />;
	}
	return (
		<Route
			exact={exact}
			path={path || to}
			render={(props) => (
				<Component {...componentProps} {...props} user={user} />
			)}
		/>
	);
};

export default ProtectedRoute;
