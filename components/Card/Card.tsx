import React from 'react';
import cn from 'classnames';
import { CardProps } from "./Card.props";
import styles from './Card.module.css';

export const Card = React.forwardRef(({ color = 'white', children, className, ...props }: CardProps, ref: React.ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<div className={cn(styles.card, className, {
			[styles.blue]: color === 'blue'
		})} ref={ref} {...props}>
			{children}
		</div>
	);
});