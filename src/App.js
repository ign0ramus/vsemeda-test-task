import React, { useState, useContext } from 'react';

import { LoginContext } from './context/LoginContext';
import LoginForm from './components/LoginForm/LoginForm';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import BestOffers from './components/BestOffers/BestOffers';
import WeekOffers from './components/WeekOffers/WeekOffers';
import Restaurants from './components/Restaurants/Restaurants';
import Footer from './components/Footer/Footer';

import './index.global.scss';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(null);
	const { isLoginFormOpen, closeLoginForm } = useContext(LoginContext);

	const handleLogin = () => {
		setIsLoggedIn(true);
		closeLoginForm();
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<div>
			<Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
			<Menu />
			<BestOffers />
			<WeekOffers />
			<Restaurants />
			<Footer />
			{isLoginFormOpen && <LoginForm onLogin={handleLogin} />}
		</div>
	);
};

export default App;
