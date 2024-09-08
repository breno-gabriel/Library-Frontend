import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import "./App.css";
import Cart from './components/Cart';
import PurchaseConclusion from './components/PurchaseConclusion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaCheckCircle } from "react-icons/fa";
import { Button } from './components/ui/button';


function App() {
  const [cart, setCart] = useState(false);
  const [purchaseBooks, setPurchaseBooks] = useState([]);
  const [purchaseConclusion, setPurchaseConclusion] = useState(false); 

  const handleAddToCart = (book) => {
    (!purchaseBooks.some(b => b.id === book.id)) && setPurchaseBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <Outlet context={{ handleAddToCart }} />
      {cart && <Cart purchaseBooks={purchaseBooks} setPurchaseBooks = {setPurchaseBooks} setCart={setCart} setPurchaseConclusion={setPurchaseConclusion}/>}
      {purchaseConclusion && 
          <Card className="mt-72 mb-60 w-96 h-auto flex flex-col justify-center items-center fixed py-5 z-30">
            <CardContent className = "flex gap-5 items-center pt-2">
              <FaCheckCircle className='text-green-300 text-6xl'/>
              <h2 className='text-xl text-green-300'>Compra realizada</h2>
            </CardContent>
            <CardFooter>
              <Button className="text-white bg-green-300" onClick = {() => setPurchaseConclusion(false)}>OK</Button>
            </CardFooter>
          </Card>}
    </>
  );
}

export default App;
