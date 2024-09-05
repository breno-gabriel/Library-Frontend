import { useState, useEffect } from 'react'
import axios from 'axios';
import Book from './components/Book';
import "./App.css"


function App() {

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
    <>
        
      <h2 className= 'text-red-800 text-6xl'>Lista de livros</h2>

      {
        books.map((book) => 
        
          <Book book={book}/>

        )
      }

    </>
  )
}

export default App
