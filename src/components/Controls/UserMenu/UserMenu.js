import React from 'react';

import { ReactComponent as UserIcon } from '../../../assets/images/user-icon.svg';
import { ReactComponent as DeliveryIcon } from '../../../assets/images/delivery-icon.svg';
import { ReactComponent as OrdersIcon } from '../../../assets/images/orders-icon.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/images/logout-icon.svg';

import classes from './UserMenu.module.scss';

const UserMenu = ({ onLogout }) => {
	return (
		<div className={classes.container}>
			<div className={classes.menuItems}>
				<div className={classes.menuItem}>
					<UserIcon />
					<span>{'Личные данные'}</span>
				</div>
				<div className={classes.menuItem}>
					<DeliveryIcon />
					<span>{'Адреса доставки'}</span>
				</div>
				<div className={classes.menuItem}>
					<OrdersIcon />
					<span>{'Предыдущие заказы'}</span>
				</div>
			</div>
			<div onClick={onLogout} className={classes.logout}>
				<LogoutIcon />
				<span>{'Выход'}</span>
			</div>
		</div>
	);
};

export default UserMenu;
