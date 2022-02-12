import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';
import { firstLevelMenu } from '../../helpers/helpers';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';


export const Menu = (): JSX.Element => {

	const router = useRouter();
	const { menu, firstCategory, setMenu } = React.useContext(AppContext);

	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1,
			}
		},
		hidden: {
			marginBottom: 0,
		}
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 29,
		},
		hidden: {
			opacity: 0,
			height: 0,
		}
	};

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory === secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};

	const openSecondLevelKey = (key: React.KeyboardEvent, secondCategory: string) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			key.preventDefault();
			openSecondLevel(secondCategory);
		}
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
							<div
								tabIndex={0}
								className={styles.secondLevel}
								onClick={() => openSecondLevel(m._id.secondCategory)}
								onKeyDown={(key: React.KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}>
								{m._id.secondCategory}
							</div>
							<motion.div
								layout
								variants={variants}
								initial={m.isOpened ? 'visible' : 'hidden'}
								animate={m.isOpened ? 'visible' : 'hidden'}
								className={cn(styles.secondLevelBlock, {
									[styles.secondLevelBlockOpened]: m.isOpened
								})}>
								{buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
							</motion.div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
		return (
			pages.map((p) => (
				<motion.div key={p._id} variants={variantsChildren}>
					<Link href={`/${route}/${p.alias}`} key={p._id}>
						<a tabIndex={isOpened ? 0 : -1} className={cn(styles.thirdLevel, {
							[styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
						})}>
							{p.category}
						</a>
					</Link>
				</motion.div>
			))
		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	);
};