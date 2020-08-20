import React from 'react';
import classnames from 'classnames';

import classes from './Checkbox.module.scss';

const Checkbox = ({ isChecked, onCheck }) => (
	<div className={classes.checkboxContainer}>
		<input type='checkbox' className={classes.hiddenCheckbox} />
		<div
			onClick={onCheck}
			className={classnames(classes.checkbox, { [classes.checked]: isChecked })}
		>
			<svg
				className={classnames({ [classes.checked]: isChecked })}
				viewBox='0 0 24 24'
			>
				<polyline points='20 3 9 15 4 8' />
			</svg>
		</div>
	</div>
);

export default Checkbox;
