import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'

import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface'
import { TopLevelCategory } from '../../interfaces/page.interface'

import CoursesIcon from './icons/cources.svg'
import ServicesIcon from './icons/services.svg'
import BooksIcon from './icons/books.svg'
import ProductsIcon from './icons/products.svg'

import styles from './Menu.module.css'
import classNames from 'classnames/bind'


const cn = classNames.bind(styles)

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products },
]

export function Menu() {
	const { menu, setMenu, firstCategory } = useContext(AppContext)

	return (
		<nav className={styles.menu}>
		</nav>
	)
}
