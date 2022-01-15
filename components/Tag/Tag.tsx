import { TagProps } from "./Tag-props";

import cn from 'classnames'

import styles from './Tag.module.css'


export function Tag({ type = 'ghost', href, children, className }:TagProps) {
	return (
		<div className={cn(styles.default, className, {
			[styles.ghost]: type === 'ghost',
			[styles.green]: type === 'green',
			[styles.gray]: type === 'gray',
			[styles.red]: type === 'red',
			[styles.primary]: type === 'primary'
		})}>
			{
				href 
				? <a href={href} target='_blank' rel='noopener'>{children}</a>
				: <>{children}</>
			}
		</div>
	)
}
