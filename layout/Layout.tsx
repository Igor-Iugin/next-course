import { LayoutProps } from './Layout-props'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

import styles from './Layout.module.css'


export function Layout({children}:LayoutProps) {
	return (
		<>
			<Header />
			<>
				<Sidebar />
				<div>
					{children}
				</div>
			</>
			<Footer />
		</>
	)
}
