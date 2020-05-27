import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default function StarRating({ value, onClickEvent, editing }) {
  return (
    <StarRatingComponent
      starCount={5}
      value={value}
      emptyStarColor={'#ccc'}
      onStarClick={(nextValue) => onClickEvent(nextValue)}
      editing={editing ? editing : true}
    />
  );
}
