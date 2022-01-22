import React from "react";

export interface SortProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sort: SortEnum;
	setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
	Rating,
	Price
}