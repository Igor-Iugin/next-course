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

	const buildFirstLevel = () => {
		return (
			<ul>
				{firstLevelMenu.map(menuList => (
					<li key={menuList.route}>
						<a className={cn('firstLevel', { active: menuList.id === firstCategory })} href={`/${menuList.route}`}>
							{menuList.icon}
							{menuList.name}
						</a>
						{menuList.id === firstCategory && buildSecondLevel(menuList)}
					</li>
				))}
			</ul>
		)
	}

	const buildSecondLevel = (menuParent: FirstLevelMenuItem) => {
		return (
			<ul>
				{menu.map(menu => (
					<li className={cn('secondLevel', { active: menu.isOpened })} key={menu._id.secondCategory}>
						{menu._id.secondCategory}
						{buildThirdLevel(menu.pages, menuParent.route)}
					</li>
				))}
			</ul>
		)
	}

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			<ul>
				{pages.map(page => (
					<li key={page._id}>
						<a href={`/${route}/${page.alias}`} className={cn('thirdLevel', { active: true })}>
							{page.category}
						</a>
					</li>
				))}
			</ul>
		)
	}

	return (
		<nav className={styles.menu}>
			{buildFirstLevel()}
		</nav>
	)
}
