import React from 'react';
import cn from 'classnames';
import Logo from '../logo.svg';
import { HeaderProps } from "./Header.props";
import styles from './Header.module.css';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

	const [isOpened, setIsOpened] = React.useState<boolean>(false);
	const router = useRouter();

	React.useEffect(() => {
		setIsOpened(false);
	}, [router]);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: 0,
			x: '100%',
		}
	};

	return (
		<header {...props} className={cn(styles.header, className)}>
			<Logo />
			<ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)} />
			<motion.div
				className={styles.mobileMenu}
				variants={variants}
				initial={'closed'}
				animate={isOpened ? 'opened' : 'closed'}>
				<Sidebar />
				<ButtonIcon className={styles.menuClose} appearance='white' icon='close' onClick={() => setIsOpened(false)} />
			</motion.div>
		</header>
	);
};