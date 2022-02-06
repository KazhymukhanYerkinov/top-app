import React from 'react';
import UpIcon from './up.svg';
import styles from './Up.module.css';
import { useScrollY } from '../../hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const Up = (): JSX.Element => {

	const controls = useAnimation();
	const y = useScrollY();

	React.useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<motion.div
			className={styles.up}
			initial={{ opacity: 0 }}
			animate={controls}>
			<ButtonIcon appearance='primary' icon='up' onClick={scrollToTop} />
		</motion.div>
	);
};
