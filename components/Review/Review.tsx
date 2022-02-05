import React from 'react';
import cn from 'classnames';
import { Rating } from '..';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import UserIcon from './user.svg';

import { ReviewProps } from './Review.props';
import styles from './Review.module.css';


export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
	const { name, title, description, createdAt, rating } = review;

	return (
		<div className={cn(styles.review, className)} {...props}>
			<UserIcon className={styles.user} />
			<div>
				<span className={styles.name}>{name}: </span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={styles.date}>
				{format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
			</div>
			<div className={styles.rating}>
				<Rating rating={rating} />
			</div>
			<div className={styles.description}>
				{description}
			</div>
		</div>
	);
};