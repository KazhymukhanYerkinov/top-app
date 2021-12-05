import React from 'react';
import cn from 'classnames';
import StarIcon from './star.svg';

import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';

export const Rating = ({ isEditable, rating, setRating, className, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

  React.useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span className={cn(styles.star, className, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}>
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: React.KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)} />
        </span>
      );
    });
    setRatingArray(updateArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) return;

    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const handleSpace = (i: number, e: React.KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) return;
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (<span key={i}> {r} </span>))}
    </div>
  );
};