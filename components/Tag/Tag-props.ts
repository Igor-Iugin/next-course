import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
	children: ReactNode,
	size?: 's' | 'm',
	type?: 'ghost' | 'green' | 'gray' | 'red' | 'primary',
	href?: string	
}
