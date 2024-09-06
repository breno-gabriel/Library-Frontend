import React from 'react'
import BookCard from './BookCard'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Books = () => {

    const [books, setBook] = useState([]);

    const handleFetch = async () => {
  
      try {
        const response = await axios.get("http://localhost:3000/books");
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
  
    }
  
    useEffect(() => {
  
      handleFetch();
  
    }, []);

    return (
        <div className='pt-64 grid grid-cols-6'>
            
        {
            books.map((book) => 
            
            <BookCard book={book}/>

            )
        }

        </div>
    )
}

export default Books
