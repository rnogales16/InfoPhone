import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
//import LoadingComponent from './components/Loading';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import Signup from './pages/Signup';
import NormalRoute from './routing-components/NormalRoute';
import ProtectedRoute from './routing-components/ProtectedRoute';
import { getLoggedIn, logout } from './services/auth';
import * as CONSTS from './utils/consts';

import Footer from "./components/Footer/Footer";
import AllPhones from "./pages/AllPhones";
import EachPhone from "./pages/EachPhone";
import EditPhone from "./pages/EditPhone";
import CreateNewPhone from './pages/NewPhone'
import Comparison from './pages/Comparison'


function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);

		console.log("accessToken: ",  accessToken)

		if (!accessToken) {
			console.log("user set to NULL in App.js useEffect")
			setUser(null);
		}

		getLoggedIn(accessToken).then((res) => {
			console.log(res);
			if (!res.data) {
				console.log('RES IN CASE OF FAILURE', res);
				setUser(null);
			} else {
				console.log("user set to LOGIN in App.js useEffect", res.data.user)
				setUser(res.data.user);
			}
		});
	}, []);

	const handleLogout = () => {
		const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);
		if (!accessToken) {
			setUser(null);
		}
		logout(accessToken).then((res) => {
			if (!res.status) {
				console.error('💡 SOMETHING HAPPENED THAT HAS TO DEALT WITH', res);
			}

			localStorage.removeItem(CONSTS.ACCESS_TOKEN);
			setUser(null);
		});
	};

	const authenticate = (user) => {
		setUser(user);
	};

	return (
		<div className='App'>
			<Navbar handleLogout={handleLogout} user={user} />

			<Switch>

			  <ProtectedRoute
          exact
          path={"/phones/:id/edit/"}
          component={EditPhone}
          user={user}
        />

        <ProtectedRoute
          exact
          path={"/phones/new/"}
          component={CreateNewPhone}
          user={user}
        />

        <NormalRoute exact path="/phones/:id/" component={EachPhone} user={user} />

				<NormalRoute exact path="/phones/compare/:id1/:id2/" component={Comparison}/>

				<NormalRoute exact path="/phones/" component={AllPhones}/>

				<NormalRoute
					exact
					path={'/auth/signup/'}
					authenticate={authenticate}
					component={Signup}
				/>
				<NormalRoute
					exact
					path={'/auth/login/'}
					authenticate={authenticate}
					component={LogIn}
				/>

				<NormalRoute exact path={'/'} component={HomePage} />

			</Switch>

			<Footer />

		</div>
	);
}

export default App;
