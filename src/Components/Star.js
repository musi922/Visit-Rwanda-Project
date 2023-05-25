import React from 'react';

const Star = ({ filled }) => {
  const starColor = filled ? '#fcee2c' : 'gray';

  return (
    <span style={{
        color: starColor,
        cursor: 'pointer',
        fontSize: '24px', // Increase the font size for bigger stars
        width: '25px', // Adjust the width for bigger stars
        height: '30px', // Adjust the height for bigger stars
        display: 'inline-block', // Ensures stars are displayed horizontally
      }}
    >
      &#9733;
    </span>
  );
};

export default Star;