import React from 'react';

import Card from '../Card/Card';

import classes from './Restaurants.module.scss';

const Restaurants = () => {
	return (
		<div className={classes.container}>
			<h2 className={classes.title}>{'Рестораны поблизости'}</h2>
			<div className={classes.cards}>
				<div className={classes.row}>
					<Card imgUrl={'static/images/burger heroes.png'} />
					<Card imgUrl={'static/images/maccafe.png'} />
					<Card imgUrl={'static/images/teremok.png'} />
					<Card imgUrl={'static/images/kfc.png'} />
				</div>
				<div className={classes.row}>
					<Card imgUrl={'static/images/teremok.png'} />
					<Card imgUrl={'static/images/matcha.png'} />
					<Card imgUrl={'static/images/burger king.png'} />
					<Card imgUrl={'static/images/burger heroes.png'} />
				</div>
				<div className={classes.row}>
					<Card imgUrl={'static/images/kfc.png'} />
					<Card imgUrl={'static/images/burger king.png'} />
					<Card imgUrl={'static/images/maccafe.png'} />
					<Card imgUrl={'static/images/teremok.png'} />
				</div>
			</div>
			<div className={classes.btnContainer}>
				<button className={classes.moreBtn}>{'Посмотреть ещё'}</button>
			</div>
		</div>
	);
};

export default Restaurants;
