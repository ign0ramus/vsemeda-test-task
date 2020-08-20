import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

import Input from '../../Input/Input';
import { ReactComponent as CrossIcon } from '../../../assets/images/cross-icon.svg';

import classes from './HeaderInput.module.scss';

const HeaderInput = ({
	value,
	icon,
	type,
	placeholder,
	label,
	onChange,
	autoCompleteData,
	onAutoCompleteClick,
	onAddToAutoComplete,
}) => {
	const [isInputOpen, setIsInputOpen] = useState(false);
	const inputRef = useRef(null);

	const handleClick = () => {
		setIsInputOpen(true);
	};

	const handleEnterPress = (e) => {
		const key = e.keyCode || e.which;
		if (key === 13) {
			setIsInputOpen(false);
			if (type === 'search') {
				onAddToAutoComplete(e.target.value);
			}
		}
	};

	const handleKeyDown = (e) => {
		const key = e.keyCode || e.which;
		if (key === 39 && type === 'search') {
			setIsInputOpen(false);
			onAddToAutoComplete(e.target.value);
		}
	};

	const handleAutoCompleteClick = (data) => {
		onAutoCompleteClick(data);
		setIsInputOpen(false);
	};

	const handleCancelClick = () => {
		onChange({ target: { value: '' } });
	};

	useEffect(() => {
		if (isInputOpen) {
			inputRef.current.focus();
		}
	}, [isInputOpen]);

	return (
		<div
			className={classnames(classes.container, {
				[classes.isInputOpen]: isInputOpen,
				[classes[type]]: type,
			})}
		>
			{icon}
			<div
				className={classnames(classes.inputContainer, {
					[classes.inputContainerHidden]: !isInputOpen,
				})}
			>
				<Input
					className={classes.input}
					type='text'
					placeholder={placeholder}
					ref={inputRef}
					onChange={onChange}
					value={value}
					onKeyPress={handleEnterPress}
					onKeyDown={handleKeyDown}
				/>
				<button onClick={handleCancelClick} className={classes.cancelBtn}>
					<CrossIcon />
				</button>
			</div>
			{!isInputOpen && (
				<span onClick={handleClick} className={classes.label}>
					{value || label}
				</span>
			)}
			{isInputOpen && autoCompleteData.length > 0 && (
				<div className={classes.autoCompleteContainer}>
					{autoCompleteData.map((data) => (
						<div
							onClick={() =>
								handleAutoCompleteClick({ type, value: data.fullName })
							}
							key={data.fullName}
							className={classes.autoCompleteItem}
						>
							<div className={classes.autoCompleteIcon}>{icon}</div>
							<span className={classes.autoCompleteText}>{data.fullName}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default HeaderInput;
