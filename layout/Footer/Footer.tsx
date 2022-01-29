import { FooterProps } from './Footer-props'
import cn from 'classnames'
import { format } from 'date-fns'

import styles from './Footer.module.css'


export function Footer({ className, ...props }:FooterProps) {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			<div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<a href='#' target='_blank' rel='noopener'>Пользовательское соглашение</a>
			<a href='#' target='_blank' rel='noopener'>Политика конфиденциальности</a>
		</footer>
	)
}
