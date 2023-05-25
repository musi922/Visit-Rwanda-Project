import React from 'react';
import Star from './Star';

const Rating = ({ rating }) => {
  const stars = [];
  const maxRating = 5;

  for (let i = 1; i <= maxRating; i++) {
    stars.push(<Star key={i} filled={i <= rating} />);
  }

  return <div>{stars}</div>;
};

export default Rating;
