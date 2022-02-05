import React from 'react';

export interface ReviewFormProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	productId: string;
}