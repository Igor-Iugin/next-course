import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
	children: ReactNode,
	size?: 's' | 'm',
	type?: 'tag' | 'price' | 'results' | 'vacancy' | 'skill',
	href?: string	
}
