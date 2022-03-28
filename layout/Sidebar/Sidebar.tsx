import { SidebarProps } from './Sidebar-props'
import { Menu } from '../Menu/Menu'

import styles from './Sidebar.module.css'


export function Sidebar({...props}:SidebarProps) {
	return (
		<aside {...props}>
			<Menu />
		</aside>
	)
}
