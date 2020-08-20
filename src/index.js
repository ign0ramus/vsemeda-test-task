import React from 'react';
import ReactDOM from 'react-dom';

import { LoginContextProvider } from './context/LoginContext';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<LoginContextProvider>
			<App />
		</LoginContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
