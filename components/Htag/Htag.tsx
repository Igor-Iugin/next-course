import { HtagProps } from './Htag-props'

export function Htag ({tag, children}:HtagProps):JSX.Element {
	return (
		<h1>
			{children}
		</h1>
	)
}
