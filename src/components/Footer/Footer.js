import React from 'react';

import { ReactComponent as Logo } from '../../assets/images/logo-colorless.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram-icon.svg';
import { ReactComponent as VkIcon } from '../../assets/images/vk-icon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images/facebook-icon.svg';
import { ReactComponent as AppIcon } from '../../assets/images/appstore-icon.svg';
import { ReactComponent as GoogleIcon } from '../../assets/images/googleplay-icon.svg';

import classes from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<div className={classes.logoContainer}>
					<Logo />
				</div>
				<div className={classes.links}>
					<span className={classes.link}>{'Ресторанам'}</span>
					<span className={classes.link}>{'Курьерам'}</span>
					<span className={classes.link}>{'Компаниям'}</span>
					<span className={classes.link}>{'Об акциях'}</span>
					<span className={classes.link}>{'Контакты'}</span>
				</div>
				<div className={classes.social}>
					<InstagramIcon />
					<VkIcon />
					<FacebookIcon />
				</div>
				<div className={classes.stores}>
					<AppIcon />
					<GoogleIcon />
				</div>
			</div>
		</div>
	);
};

export default Footer;
