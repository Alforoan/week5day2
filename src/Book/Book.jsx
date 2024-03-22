import React, { useEffect } from 'react'
import { useState } from 'react';

const Book = ({book}) => {
    const {title,author, description} = book;
    const [showReadMore, setShowReadMore] = useState(false);
    const [booksArray, setBooksArray] = useState([]);
    const handleClick = () => {
        setShowReadMore((prev) => !prev);
    };

    // const handleAdd = (e) => {

    //    const bookTitle = e.target.parentElement.childNodes[1].innerText
    //    const books = JSON.parse(localStorage.getItem('books') || '[]');
    //    console.log(typeof books);
    //    if(!books.includes(bookTitle)){
    //        books.push(bookTitle);
    //    }
    //    setBooksArray(books);
    
    //    if(!books.includes(bookTitle)){
    //      localStorage.setItem('books', JSON.stringify([...booksArray]));
    //    }else{
    //     alert('book has already been added')
    //    }
  
    //    alert(`${bookTitle} has been added`);
    // }

    const handleAdd = (e) => {
      const bookTitle = e.target.parentElement.childNodes[1].innerText;
      const books = JSON.parse(localStorage.getItem('books') || '[]');

      if (!books.includes(bookTitle)) {
        const updatedBooks = [...books, bookTitle];
        setBooksArray(updatedBooks);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
        alert(`${bookTitle} has been added`);
      } else {
        alert('Book has already been added');
      }
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
        <button onClick={handleAdd} style={{ backgroundColor:'gray', color:'white', }}>Add</button>

      
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