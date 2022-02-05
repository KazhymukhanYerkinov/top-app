import React from "react";
import { FieldError } from "react-hook-form";

export interface TextareaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{
	error?: FieldError;
}