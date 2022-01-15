import { TagProps } from "./Tag-props";

import cn from 'classnames'

import styles from './Tag.module.css'


export function Tag({ type = 'tag', children, className }:TagProps) {
	return (
		<div className={cn(styles.default, className, {
			[styles.price]: type === 'price',
			[styles.tag]: type === 'tag',
			[styles.results]: type === 'results',
			[styles.vacancy]: type === 'vacancy',
			[styles.skill]: type === 'skill'
		})}>
			{children}
		</div>
	)
}
