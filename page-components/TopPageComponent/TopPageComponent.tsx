import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import { HhData, Htag, Tag } from "../../components";

export const TopPageComponent = ({ page, products }: TopPageComponentProps): JSX.Element => {
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
			<HhData {...page.hh} />
		</div>
	);
};