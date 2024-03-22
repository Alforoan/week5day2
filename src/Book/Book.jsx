import React from 'react'
import { useState } from 'react';

const Book = ({book}) => {
    const {title,author, description} = book;
    const [showReadMore, setShowReadMore] = useState(false);
    const handleClick = () => {
        setShowReadMore((prev) => !prev);
    };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid gray',
        borderRadius: '4px',
        padding: '10px 12px',
        marginBottom: '2rem',
        maxWidth: '800px',
      }}
    >
      <h2 style={{ color: 'gray' }}>{title}</h2>
      <h3>{author}</h3>
      {showReadMore ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>{description}</p>
          <button onClick={handleClick}>Read Less</button>
        </div>
      ) : (
        <button onClick={handleClick}>Read More</button>
      )}
    </div>
  );
}

export default Book