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
import SaleForms from './components/SaleForms';
import WrapperCard from './components/WrapperCard';


function App() {
  const [cart, setCart] = useState(false);
  const [forms, setForms] = useState(false);
  const [purchaseBooks, setPurchaseBooks] = useState([]);
  const [purchaseConclusion, setPurchaseConclusion] = useState(false); 

  const handleAddToCart = (book) => {
    setPurchaseBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <>
      <Header cart={cart} setCart={setCart} forms = {forms} setForms = {setForms} />
      {/* <Outlet context={{ handleAddToCart }} /> */}
      {cart && <Cart purchaseBooks={purchaseBooks} setPurchaseBooks = {setPurchaseBooks} setCart={setCart} setPurchaseConclusion={setPurchaseConclusion}/>}
      {/* {purchaseConclusion && 
          <Card className="mt-72 mb-60 w-96 h-auto flex flex-col justify-center items-center">
            <CardContent className = "flex gap-6 items-center">
              <FaCheckCircle className='text-green-300 text-6xl'/>
              <h2 className='text-xl text-green-300'>Compra realizada</h2>
            </CardContent>
          </Card>} */}
      <SaleForms/>

    </>
  );
}

export default App;
