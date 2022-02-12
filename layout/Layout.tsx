import React from 'react';
import cn from 'classnames';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';

import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { Up } from '../components';


const Layout = ({ children }: LayoutProps): JSX.Element => {
	const bodyRef = React.useRef<HTMLDivElement>(null);
	const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = React.useState<boolean>(false);

	const skipContentAction = (key: React.KeyboardEvent) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			key.preventDefault();
			bodyRef.current?.focus();
		}
		setIsSkipLinkDisplayed(false);
	};

	return (
		<div className={styles.wrapper}>
			<a
				tabIndex={1}
				onKeyDown={skipContentAction}
				onFocus={() => setIsSkipLinkDisplayed(true)}
				className={cn(styles.skipLink, {
					[styles.displayed]: isSkipLinkDisplayed
				})}> Сразу к содержанию </a>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body} ref={bodyRef} tabIndex={0}>
				{children}
			</div>
			<Footer className={styles.footer} />
			<Up />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: React.FC<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};