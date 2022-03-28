import cn from 'classnames'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'

import styles from './Menu.module.css'


export function Menu() {
	const { menu, setMenu, firstCategory } = useContext(AppContext)

	const MenuList = (
		<ul>
			{menu.map(item => <li key={item._id.secondCategory}>{item._id.secondCategory}</li>)}
		</ul>
	)

	return (
		<nav>
			{MenuList}
		</nav>
	)
}
