import React from 'react';
import classnames from 'classnames';

import classes from './Input.module.scss';

const Input = React.forwardRef(({ className, ...props }, ref) => {
	return (
		<input
			{...props}
			className={classnames(classes.input, className)}
			ref={ref}
		/>
	);
});

export default Input;
