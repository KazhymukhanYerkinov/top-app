import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';
import { firstLevelMenu } from '../../helpers/helpers';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';


export const Menu = (): JSX.Element => {

	const router = useRouter();
	const { menu, firstCategory, setMenu } = React.useContext(AppContext);

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory === secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};

	const buildFirstLevel = () => {
		return (
			<React.Fragment>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<Link href={`/${m.route}`}>
							<a>
								<div className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: m.id === firstCategory
								})}>
									{m.icon}
									<span> {m.name} </span>
								</div>
							</a>
						</Link>
						{m.id === firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</React.Fragment>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => {
					if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}
					return (
						<div key={m._id.secondCategory}>
							<div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
								{m._id.secondCategory}
							</div>
							<div className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened
							})}>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map((p) => (
				<Link href={`/${route}/${p.alias}`} key={p._id}>
					<a className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
					})}>
						{p.category}
					</a>
				</Link>
			))
		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	);
};