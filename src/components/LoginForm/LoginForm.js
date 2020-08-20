import React, { useState, useContext, useEffect } from 'react';

import { LoginContext } from '../../context/LoginContext';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import { ReactComponent as CloseIcon } from '../../assets/images/cross-icon.svg';

import classes from './LoginForm.module.scss';

const LoginForm = ({ onLogin }) => {
	const [login, setLogin] = useState('+7(');
	const [password, setPassword] = useState('');
	const [isChecked, setIsChecked] = useState('');
	const { closeLoginForm } = useContext(LoginContext);

	const toggleCheckbox = () => {
		setIsChecked((isChecked) => !isChecked);
	};

	const handleChange = (e) => {
		const { target } = e;
		const numRegEx = /^\d{0,10}$/;
		if (target.name === 'login') {
			const number = target.value.slice(3).replace(')', '');
			if (target.value.length > 2 && numRegEx.test(number)) {
				let { value } = target;
				if (number.length > 3) {
					value = `+7(${number.slice(0, 3)})${number.slice(3)}`;
				}
				setLogin(value);
			}
		}
		if (target.name === 'password' && numRegEx.test(target.value)) {
			setPassword(target.value);
		}
	};

	return (
		<div className={classes.container}>
			<div className={classes.formContainer}>
				<button onClick={closeLoginForm} className={classes.closeBtn}>
					<CloseIcon />
				</button>
				<span className={classes.title}>{'Вход в личный кабинет'}</span>
				<span className={classes.label}>{'Введите номер телефона'}</span>
				<Input
					name='login'
					value={login}
					onChange={handleChange}
					type='text'
					className={classes.textInput}
				/>
				<span className={classes.label}>{'Введите код из СМС-сообщения'}</span>
				<Input
					name='password'
					value={password}
					onChange={handleChange}
					type='text'
					className={classes.textInput}
				/>
				<div className={classes.agreement}>
					<Checkbox
						onCheck={toggleCheckbox}
						isChecked={isChecked}
						className={classes.checkbox}
						type='checkbox'
					/>
					<span className={classes.agreementText}>
						{'Указывая номер телефона, я принимаю условия '}
						<a href='/'>{'пользовательского соглашения'}</a>
					</span>
				</div>
				<button onClick={onLogin} className={classes.loginBtn}>
					{'Войти'}
				</button>
				<span className={classes.signUpText}>
					{'В первый раз? '} <b>{'Зарегистрироваться'}</b>
				</span>
			</div>
		</div>
	);
};

export default LoginForm;
