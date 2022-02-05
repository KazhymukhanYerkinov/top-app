import React from 'react';
import { FieldError } from 'react-hook-form';

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	error?: FieldError;
}