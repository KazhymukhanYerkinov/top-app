import cn from 'classnames';
import { Button, Card, Rating, Tag } from '..';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	return (
		<Card className={cn(styles.product, className)}>
			<div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>{product.price}</div>
			<div className={styles.credit}>{product.credit}</div>
			<div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
			<div className={styles.tags}>{product.categories.map(c => <Tag key={c} color='ghost'>{c}</Tag>)}</div>
			<div className={styles.priceTitle}>цена</div>
			<div className={styles.creditTitle}>в кредит</div>
			<div className={styles.ratingTitle}>{product.reviewCount} отзывов</div>
			<div className={styles.hr}> <hr /> </div>
			<div className={styles.description}> {product.description} </div>
			<div className={styles.feature}> Фичи </div>
			<div className={styles.advBlock}>
				<div className={styles.advantages}>
					<div>Преимущества</div>
					<div>{product.advantages}</div>
				</div>
				<div className={styles.disadvantages}>
					<div>Недостатки</div>
					<div>{product.disadvantages}</div>
				</div>
			</div>
			<div className={styles.hr}> <hr /> </div>
			<div className={styles.actions}>
				<Button appearance='primary'> Узнать подробнее </Button>
				<Button appearance='ghost' arrow={'right'}> Читать отзывы </Button>
			</div>
		</Card>
	);
};