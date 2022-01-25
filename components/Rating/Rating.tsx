import { Fragment, KeyboardEvent, useEffect, useState } from 'react'
import { RatingProps } from './Rating-props'
import cn from 'classnames'

import StarIcon from './star.svg'

import styles from './Rating.module.css'


export function Rating({isEditable, rating, setRating, children, className, ...props}:RatingProps) {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
	const [hoverRating, setHoverRating] = useState<number>(0)

	useEffect(() => {
		constractRating(hoverRating > 0 ? hoverRating : rating)
	}, [rating, hoverRating])


	const onStartHover = (ratingTemp:number) => {
		if (!isEditable) {
			return
		}
		setHoverRating(ratingTemp)
	}

	const onClick = (rate:number, event?:KeyboardEvent<SVGElement>) => {
		if (!isEditable || !setRating) {
			return
		}

		if (event) {
			if (event.code !== 'Space') return
		}

		setRating(rate)
	}

	const constractRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
			return (
				<StarIcon 
					className={cn(styles.star, {
						[styles.filled]: index < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => onStartHover(index + 1)}
					onClick={() => onClick(index + 1)}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e:KeyboardEvent<SVGElement>) => onClick(index + 1, e)}
				/>
			)
		})

		setRatingArray(updatedArray)
	}

	return (
		<div 
			className={styles.stars}
			onMouseLeave={() => onStartHover(0)}
			{...props}
			>
			{ratingArray.map((rating, index) => <Fragment key={index}>{rating}</Fragment>)}
		</div>
	)
}
