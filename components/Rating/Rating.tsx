import { useEffect, useState } from 'react';
import { RatingProps } from './Rating-props';
import StarIcon from './star.svg'

import cn from 'classnames'

import styles from './Rating.module.css'


export function Rating({isEditable, rating, setRating, children, className, ...props}:RatingProps) {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	useEffect(() => {
		constractRating(rating)
	}, [rating])

	const constractRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((rating: JSX.Element, index: number) => {
			return (
				<StarIcon 
					className={cn(styles.star, {
						[styles.filled]: index < currentRating
					})}
				/>
			)
		})

		setRatingArray(updatedArray)
	}

	return (
		<div className={styles.stars} {...props}>
			{ratingArray.map((rating, index) => <div key={index}>{rating}</div>)}
		</div>
	)
}
