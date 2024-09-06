import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import BookCard from './components/BookCard';
import Books from './components/Books';
import Header from './components/Header';
import "./App.css"


function App() {

  // const [books, setBook] = useState([]);

  // const handleFetch = async () => {

  //   try {
  //     const response = await axios.get("http://localhost:3000/books");
  //     setBook(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  // useEffect(() => {

  //   handleFetch();

  // }, []);

  return (
    <>

    <Header/>

    <Outlet/>

    {/* {
        books.map((book) => 
        
          <BookCard book={book}/>

        )
    } */}

    </>
  )
}

export default App
