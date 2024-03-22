import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { programmingBooks as BooksList } from '../BooksList'
import Book from '../Book/Book'
const Books = () => {

    useEffect(() => {
        const books = localStorage.getItem('books');
        if(books){
            console.log("check out more books");
        }else{
            console.log("should add more books");
        }
    }, [])

    const handleClick = () => {
        const books = localStorage.getItem('books');
        if(books){
            alert(books)
        }else(
            alert('click the Add button to add to favorites')
        )
    }

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', minHeight:'100vh',}}>
        <div>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </div>
        <button style={{marginTop:'2rem'}} onClick={handleClick}>List of Favorite Books</button>
        <h2>List of helpful books:</h2>
        {BooksList.map((book,index) => {
            return (
                <React.Fragment key={index}>
                    <Book book={book}/>
                    
                </React.Fragment>
            )
        })}
    </div>
  )
}

export default Books