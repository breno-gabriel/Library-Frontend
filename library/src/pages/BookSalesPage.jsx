import { useState, useEffect } from 'react';
import BooksExibition from '../components/BooksExibition';
import axios from 'axios';

const BookSalesPage = () => {
  const [forSale, setForSale] = useState([]); 

  const getForSaleBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/books?seller_id=1');
      setForSale(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getForSaleBooks();
  }, []);

  return (
    <div>
      <BooksExibition books={forSale} />
    </div>
  );
};

export default BookSalesPage;
