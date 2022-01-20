import React from 'react';

export interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color?: 'white' | 'blue' | 'l';
	children: React.ReactNode;
}