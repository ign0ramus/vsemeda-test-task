import React from 'react';

import { ReactComponent as LikeIcon } from '../../assets/images/like-icon.svg';
import { ReactComponent as CarIcon } from '../../assets/images/car-icon.svg';
import { ReactComponent as TimeIcon } from '../../assets/images/time-icon.svg';
import { ReactComponent as MoneyIcon } from '../../assets/images/money-icon.svg';

import classes from './Card.module.scss';

const Card = ({ imgUrl }) => {
	return (
		<div className={classes.container}>
			<div className={classes.imgContainer}>
				<img src={imgUrl} alt='Restaurant' />
				<div className={classes.like}>
					<LikeIcon />
				</div>
			</div>
			<div className={classes.footer}>
				<div className={classes.wrapper}>
					<div className={classes.infoContainer}>
						<span className={classes.name}>{'Название ресторана'}</span>
						<div className={classes.info}>
							<div className={classes.item}>
								<CarIcon />
								<span>{'0 ₽'}</span>
							</div>
							<div className={classes.item}>
								<TimeIcon />
								<span>{'20 - 30 мин'}</span>
							</div>
							<div className={classes.item}>
								<MoneyIcon />
								<span>{'₽₽₽'}</span>
							</div>
						</div>
					</div>
					<div className={classes.grade}>
						<span>{'4.7'}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
