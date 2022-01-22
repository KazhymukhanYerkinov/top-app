import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import { HhData, Htag, Tag } from "../../components";
import { TopLevelCategory } from "../../interfaces/page.interface";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	console.log(page);
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'> {page.title} </Htag>
				{products && <Tag color='gray' size='m'> {products.length} </Tag>}
				<span> Sort </span>
			</div>
			<div>
				{products && products.map(p => (<div key={p._id}> {p.title} </div>))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'> Vacancy - {page.category} </Htag>
				<Tag color='red' size='m'> hh.ru </Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
		</div>
	);
};