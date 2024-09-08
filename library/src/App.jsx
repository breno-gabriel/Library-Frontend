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

  return (
    <>
      <Header setForms = {setForms} forms = {forms} />
      <Outlet context={{ setUpdateForms, updateForms}} />
      {/* {cart && <Cart purchaseBooks={purchaseBooks} setPurchaseBooks = {setPurchaseBooks} setCart={setCart} setPurchaseConclusion={setPurchaseConclusion}/>} */}
      {forms && <CreateBookForm setForms = {setForms}/>}
    </>
  );
}

export default App;
