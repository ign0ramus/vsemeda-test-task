import React, { useState } from 'react';

export const LoginContext = React.createContext();

export const LoginContextProvider = (props) => {
	const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

	const openLoginForm = () => {
		setIsLoginFormOpen(true);
	};

	const closeLoginForm = () => {
		setIsLoginFormOpen(false);
	};

	return (
		<LoginContext.Provider
			value={{ isLoginFormOpen, openLoginForm, closeLoginForm }}
		>
			{props.children}
		</LoginContext.Provider>
	);
};
