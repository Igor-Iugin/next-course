import { PgraphProps } from './PGraph-props';

import cn from 'classnames'

import styles from './Pgraph.module.css'


export function Pgraph({ size = 'm', className, children, ...props}:PgraphProps) {
	return (
		<p
			className={cn(styles.Pgraph, className, {
				[styles.small]: size === 's',
				[styles.normal]: size === 'm',
				[styles.big]: size === 'l'
			})}
			{...props}
			>
			{children}
		</p>
	)
}
