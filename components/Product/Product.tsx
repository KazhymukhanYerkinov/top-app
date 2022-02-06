import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Divider, Rating, Tag, Review, ReviewForm } from '..';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { priceRU, declOfNum } from '../../helpers/helpers';
import Image from 'next/image';

export const Product = motion(React.forwardRef(({ product, className, ...props }: ProductProps, ref: React.ForwardedRef<HTMLDivElement>): JSX.Element => {

	const [isReviewOpened, setIsReviewOpened] = React.useState<boolean>(false);
	const reviewRef = React.useRef<HTMLDivElement>(null);

	const variants = {
		visible: { opacity: 1, height: 'auto' },
		hidden: { opacity: 0, height: 0 }
	};

	const scrollToReview = () => {
		setIsReviewOpened(true);
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<div className={className} {...props} ref={ref}>
			<Card className={styles.product}>
				<div className={styles.logo}>
					<Image
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width={70}
						height={70} />
				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					{priceRU(product.price)}
					{product.oldPrice && <Tag className={styles.oldPrice} color='green'> {priceRU(product.price - product.oldPrice)} </Tag>}
				</div>
				<div className={styles.credit}>
					{priceRU(product.credit)}/<span className={styles.month}>мес</span>
				</div>
				<div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
				<div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
				<div className={styles.priceTitle}>цена</div>
				<div className={styles.creditTitle}>в кредит</div>
				<div className={styles.rateTitle}><a href='#ref' onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
				<Divider className={styles.hr} />
				<div className={styles.description}> {product.description} </div>
				<div className={styles.feature}>
					{product.characteristics.map(c => (
						<div className={styles.characteristics} key={c.name}>
							<span className={styles.characteristicsName}> {c.name} </span>
							<span className={styles.characteristicsDots}> </span>
							<span className={styles.characteristicsValue}> {c.value} </span>
						</div>
					))}
				</div>
				<div className={styles.advBlock}>
					{product.advantages && <div className={styles.advantages}>
						<div className={styles.advTitle}>Преимущества</div>
						<div>{product.advantages}</div>
					</div>}
					{product.disadvantages && <div className={styles.disadvantages}>
						<div>Недостатки</div>
						<div>{product.disadvantages}</div>
					</div>}
				</div>
				<Divider className={styles.hr} />
				<div className={styles.actions}>
					<Button appearance='primary'> Узнать подробнее </Button>
					<Button
						appearance='ghost'
						arrow={isReviewOpened ? 'down' : 'right'}
						className={styles.reviewButton}
						onClick={() => setIsReviewOpened(!isReviewOpened)}> Читать отзывы </Button>
				</div>
			</Card>
			<motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
				<Card color='blue' className={styles.reviews} ref={reviewRef}>
					{product.reviews.map(r => (
						<React.Fragment key={r._id}>
							<Review key={r._id} review={r} />
							<Divider />
						</React.Fragment>
					))}
					<ReviewForm productId={product._id} />
				</Card>
			</motion.div>
		</div>


	);
}));