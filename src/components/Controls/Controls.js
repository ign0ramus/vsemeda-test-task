import React, { useContext, useState } from 'react';

import { LoginContext } from '../../context/LoginContext';

import UserMenu from './UserMenu/UserMenu';
import { ReactComponent as LoginIcon } from '../../assets/images/login-icon.svg';
import { ReactComponent as CartIcon } from '../../assets/images/cart-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/images/user-icon.svg';

import classes from './Controls.module.scss';

const Controls = ({ isLoggedIn, onLogout }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { openLoginForm } = useContext(LoginContext);

	const toggleUserMenu = () => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	};

	const handleLogout = () => {
		onLogout();
		setIsMenuOpen(false);
	};

	return (
		<div className={classes.container}>
			{isLoggedIn ? (
				<button onClick={toggleUserMenu} className={classes.userBtn}>
					<UserIcon />
				</button>
			) : (
				<button onClick={openLoginForm} className={classes.loginBtn}>
					<LoginIcon />
					<span className={classes.loginText}>Войти</span>
				</button>
			)}
			{isMenuOpen && <UserMenu onLogout={handleLogout} />}
			<button className={classes.cartBtn}>
				<CartIcon />
			</button>
		</div>
	);
};

export default Controls;
