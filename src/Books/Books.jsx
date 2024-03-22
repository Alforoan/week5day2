import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { programmingBooks as BooksList } from '../BooksList'
import Book from '../Book/Book'
const Books = () => {
    const [showReadMore, setShowReadMore] = useState(false);

 

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', minHeight:'100vh',}}>
        <div>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </div>
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