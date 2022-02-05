import cn from 'classnames';
import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import React from 'react';


export const Textarea = React.forwardRef(({ className, error, ...props }: TextareaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
	return (
		<div className={cn(styles.textareaWrapper, className)}>
			<textarea className={cn(styles.textarea, {
				[styles.error]: error
			})} ref={ref} {...props} />
			{error && <span className={styles.errorMessage}> {error.message} </span>}
		</div>
	);
});

