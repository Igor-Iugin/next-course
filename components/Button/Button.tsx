import { ButtonProps } from './Button-props';
import ArrowIcon from '../../public/images/arrow.svg'

import cn from 'classnames'

import styles from './Button.module.css'


export function Button({apperance, className, arrow = null, children, ...props}:ButtonProps) {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: apperance === 'primary',
				[styles.ghost]: apperance === 'ghost',
				[styles.hasArrow]: arrow
			})}
			{...props}
			>
			{children}
			{arrow && <ArrowIcon />}
		</button>
	)
}
