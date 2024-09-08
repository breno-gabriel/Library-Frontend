import {
  Card,
  CardContent
} from "@/components/ui/card";
import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import "./App.css";
import Cart from './components/Cart';
import CreateBookForm from './components/CreateBookForm';
import Header from './components/Header';
import UpdateBookForms from './components/UpdateBookForms';

function App() {
  const [cart, setCart] = useState(false);
  const [forms, setForms] = useState(false);
  const [updateForms, setUpdateForms] = useState(false);
  const [purchaseBooks, setPurchaseBooks] = useState([]);
  const [purchaseConclusion, setPurchaseConclusion] = useState(false); 
  const [saleBooks, setSaleBooks] = useState([]);

  const handleAddToCart = (book) => {
    (!purchaseBooks.some(b => b.id === book.id)) && setPurchaseBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <>
      <Header setForms = {setForms} forms = {forms} />
      <Outlet context={{ handleAddToCart, setUpdateForms, updateForms}} />
      {/* {cart && <Cart purchaseBooks={purchaseBooks} setPurchaseBooks = {setPurchaseBooks} setCart={setCart} setPurchaseConclusion={setPurchaseConclusion}/>} */}
      {/* {purchaseConclusion && 
          <Card className="mt-72 mb-60 w-96 h-auto flex flex-col justify-center items-center fixed py-5 z-30">
            <CardContent className = "flex gap-5 items-center pt-2">
              <FaCheckCircle className='text-green-300 text-6xl'/>
              <h2 className='text-xl text-green-300'>Compra realizada</h2>
            </CardContent>
          </Card>}  */}
      {forms && <CreateBookForm setForms = {setForms}/>}
    </>
  );
}

export default App;
