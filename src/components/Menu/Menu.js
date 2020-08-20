import React from 'react';
import classnames from 'classnames';

import { ReactComponent as MoreIcon } from '../../assets/images/more-icon.svg';

import classes from './Menu.module.scss';

const Menu = () => {
	return (
		<div className={classes.container}>
			<span className={classnames(classes.item, classes.active)}>{'Все'}</span>
			<span className={classes.item}>{'Суши'}</span>
			<span className={classes.item}>{'Пицца'}</span>
			<span className={classes.item}>{'Бургеры'}</span>
			<span className={classes.item}>{'Фастфуд'}</span>
			<span className={classes.item}>{'Шашлыки'}</span>
			<span className={classes.item}>{'Азиатская'}</span>
			<span className={classes.item}>{'Пироги'}</span>
			<span className={classes.item}>{'Десерты'}</span>
			<span className={classes.item}>{'Здоровая еда'}</span>
			<div className={classes.item}>
				<span>{'Ещё'}</span>
				<MoreIcon />
			</div>
		</div>
	);
};

export default Menu;
