import React from 'react';

const ProtectedPage = (props) => {
	console.log(props);

	const { user } = props;
	return (
		<div>
			<h1>This page is protected just for you, {user.username}!</h1>
		</div>
	);
};

export default ProtectedPage;
