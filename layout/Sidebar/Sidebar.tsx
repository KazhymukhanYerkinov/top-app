import cn from 'classnames';
import { Search } from '../../components';
import { Menu } from "../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
import styles from './Sidebar.module.css';
import Logo from '../logo.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(styles.sidebar, className)} {...props}>
			<Logo className={styles.logo} />
			<Search />
			<Menu />
		</div>
	);
};