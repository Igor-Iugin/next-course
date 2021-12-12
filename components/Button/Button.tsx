import { ButtonProps } from './Button-props';
import cn from 'classnames'
import styles from './Button.module.css'

export function Button({apperance, className, children, ...props}:ButtonProps) {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: apperance === 'primary',
				[styles.ghost]: apperance === 'ghost'
			})}
			{...props}
			>
			{children}
		</button>
	)
}
