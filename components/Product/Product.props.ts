import React from "react";
import { ProductModel } from "../../interfaces/product.interface";

export interface ProductProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	product: ProductModel;
}