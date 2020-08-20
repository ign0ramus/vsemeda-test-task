import React, { useState, useRef } from 'react';
import classnames from 'classnames';

import Card from '../Card/Card';
import { ReactComponent as RightIcon } from '../../assets/images/right-arrow-icon.svg';
import { ReactComponent as LeftIcon } from '../../assets/images/left-arrow-icon.svg';

import classes from './WeekOffers.module.scss';

const WeekOffers = () => {
	const [index, setIndex] = useState(0);
	const cardsRef = useRef(null);
	const offersRef = useRef(null);

	const handleRightClick = () => {
		if (index < 3) {
			setIndex((index) => index + 1);
			cardsRef.current.scrollLeft += 410;
			offersRef.current.scrollLeft += 410;
		}
	};

	const handleLeftClick = () => {
		if (index > 0) {
			setIndex((index) => index - 1);
			cardsRef.current.scrollLeft -= 410;
			offersRef.current.scrollLeft -= 410;
		}
	};

	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<h2 className={classes.title}>{'Предложения недели'}</h2>
				<div className={classes.controls}>
					<div
						onClick={handleLeftClick}
						className={classnames({ [classes.disabled]: index === 0 })}
					>
						<LeftIcon />
					</div>
					<div
						className={classnames({ [classes.disabled]: index === 3 })}
						onClick={handleRightClick}
					>
						<RightIcon />
					</div>
				</div>
			</div>
			<div ref={cardsRef} className={classes.cards}>
				<Card imgUrl={'static/images/burger heroes.png'} />
				<Card imgUrl={'static/images/maccafe.png'} />
				<Card imgUrl={'static/images/teremok.png'} />
				<Card imgUrl={'static/images/burger heroes.png'} />
				<Card imgUrl={'static/images/maccafe.png'} />
				<Card imgUrl={'static/images/teremok.png'} />
			</div>
			<div ref={offersRef} className={classes.offers}>
				<div className={classnames(classes.offer, classes.offer1)}>
					<div className={classes.info}>
						<div className={classes.title}>
							<span>{'Скидка 30%'}</span>
						</div>
						<div className={classes.text}>
							<span>{'на все пиццы в Папа Карло'}</span>
						</div>
					</div>
					<div className={classes.imgContainer}>
						<img src='static/images/pepperoni.png' alt='Offer' />
					</div>
				</div>
				<div className={classnames(classes.offer, classes.offer2)}>
					<div className={classes.info}>
						<div className={classes.title}>
							<span>{'Десерт в подарок'}</span>
						</div>
						<div className={classes.text}>
							<span>{'при заказе в День Рождения'}</span>
						</div>
					</div>
					<div className={classes.imgContainer}>
						<img src='static/images/hotpng.png' alt='Offer' />
					</div>
				</div>
				<div className={classnames(classes.offer, classes.offer3)}>
					<div className={classes.info}>
						<div className={classes.title}>
							<span>{'1=2'}</span>
						</div>
						<div className={classes.text}>
							<span>{'в бургерной Brook’s burgers'}</span>
						</div>
					</div>
					<div className={classes.imgContainer}>
						<img src='static/images/mini-burgers.png' alt='Offer' />
					</div>
				</div>
				<div className={classnames(classes.offer, classes.offer1)}>
					<div className={classes.info}>
						<div className={classes.title}>
							<span>{'Скидка 30%'}</span>
						</div>
						<div className={classes.text}>
							<span>{'на все пиццы в Папа Карло'}</span>
						</div>
					</div>
					<div className={classes.imgContainer}>
						<img src='static/images/pepperoni.png' alt='Offer' />
					</div>
				</div>
				<div className={classnames(classes.offer, classes.offer2)}>
					<div className={classes.info}>
						<div className={classes.title}>
							<span>{'Десерт в подарок'}</span>
						</div>
						<div className={classes.text}>
							<span>{'при заказе в День Рождения'}</span>
						</div>
					</div>
					<div className={classes.imgContainer}>
						<img src='static/images/hotpng.png' alt='Offer' />
					</div>
				</div>
				<div className={classnames(classes.offer, classes.offer3)}>
					<div className={classes.info}>
						<div className={classes.title}>
							<span>{'1=2'}</span>
						</div>
						<div className={classes.text}>
							<span>{'в бургерной Brook’s burgers'}</span>
						</div>
					</div>
					<div className={classes.imgContainer}>
						<img src='static/images/mini-burgers.png' alt='Offer' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeekOffers;
