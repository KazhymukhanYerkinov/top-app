import React from 'react';
import { ReviewModel } from '../../interfaces/product.interface';

export interface ReviewProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	review: ReviewModel;
}