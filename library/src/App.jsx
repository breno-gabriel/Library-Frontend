import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import "./App.css";
import Advice from "./components/Advice";
import CreateBookForm from './components/CreateBookForm';
import Header from './components/Header';

function App() {
  const [cart, setCart] = useState(false);
  const [forms, setForms] = useState(false);
  const [updateForms, setUpdateForms] = useState(false);
  const [purchaseBooks, setPurchaseBooks] = useState([]);
  const [purchaseConclusion, setPurchaseConclusion] = useState(false); 
  const [saleBooks, setSaleBooks] = useState([]);
  const [advice, setAdvice] = useState(false); 
  const [message, setMessage] = useState("");

  return (
    <>
      <Header setForms = {setForms} forms = {forms} />
      <Outlet context={{ setUpdateForms, updateForms, setAdvice, advice, setMessage}} />
      {/* {cart && <Cart purchaseBooks={purchaseBooks} setPurchaseBooks = {setPurchaseBooks} setCart={setCart} setPurchaseConclusion={setPurchaseConclusion}/>} */}
      {forms && <CreateBookForm setForms = {setForms} advice = {advice} setAdvice = {setAdvice} setMessage = {setMessage}/>}
      {advice && <Advice message={message} setAdvice={setAdvice}/>}
    </>
  );
}

export default App;
