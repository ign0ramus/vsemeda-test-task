import React from 'react';

import Card from '../Card/Card';

import classes from './BestOffers.module.scss';

const BestOffers = () => {
	return (
		<div className={classes.container}>
			<h2 className={classes.title}>{'Лучшие предложения'}</h2>
			<span className={classes.subtitle}>
				{'С учетом ваших предыдущих заказов'}
			</span>
			<div className={classes.cards}>
				<Card imgUrl='static/images/kfc.png' />
				<Card imgUrl='static/images/burger heroes.png' />
				<Card imgUrl='static/images/maccafe-wide.png' />
				<Card imgUrl='static/images/kfc.png' />
			</div>
		</div>
	);
};

export default BestOffers;
