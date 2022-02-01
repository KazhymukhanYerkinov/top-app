import cn from 'classnames';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	return (
		<div>
			{product.title}
		</div>
	);
};