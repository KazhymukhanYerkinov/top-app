import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { Input, Button } from '..';
import GlassIcon from './glass.svg';

import { SearchProps } from './Search.props';
import styles from './Search.module.css';


export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const router = useRouter();
	const [search, setSearch] = React.useState<string>('');

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			goToSearch();
		}
	};

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				className={styles.input}
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				appearance='primary'
				className={styles.button}
				onClick={goToSearch}>
				<GlassIcon />
			</Button>
		</div>
	);
};