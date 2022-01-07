import { TagProps } from "./Tag-props";

import cn from 'classnames'

import styles from './Tag.module.css'


export function Tag({ children }:TagProps) {
	return (
		<div>
			{children}
		</div>
	)
}
