import { GetStaticProps } from 'next';
import React from 'react';
import axios from 'axios';
import { Button, Htag, P, Tag, Rating, Input, Textarea } from '../components/index';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';


const Home = (): JSX.Element => {
	const [rating, setRating] = React.useState(4);

	return (
		<>
			<Htag tag='h1'> Hello </Htag>
			<Button appearance='primary' arrow='right'> Button </Button>
			<Button appearance='ghost' arrow='down'> Button </Button>
			<P size='l'> Large </P>
			<P> Medium </P>
			<P size='s'> Small </P>
			<Tag size='s'> Ghost </Tag>
			<Tag size='m' color='red'> Red </Tag>
			<Tag size='s' color='green'> Green </Tag>
			<Tag color='primary'> Primary </Tag>
			<Rating isEditable rating={rating} setRating={setRating} />
			<Input placeholder='Enter the text' />
			<Textarea placeholder='Enter the text' />
		</>
	);
};

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});

	return {
		props: {
			menu,
			firstCategory,
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
