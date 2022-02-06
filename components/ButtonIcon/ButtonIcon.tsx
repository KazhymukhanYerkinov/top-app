import React from 'react';
import cn from 'classnames';

import { ButtonIconProps, icons } from './ButtonIcon.props';
import styles from './ButtonIcon.module.css';


export const ButtonIcon = ({ className, icon, appearance, ...props }: ButtonIconProps) => {
	const IconComponent = icons[icon];
	return (
		<button className={cn(styles.button, className, {
			[styles.primary]: appearance === 'primary',
			[styles.white]: appearance === 'white',
		})} {...props}>
			<IconComponent />
		</button>
	);
};