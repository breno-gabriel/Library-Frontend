import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBookOpenReader } from 'react-icons/fa6';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';
import { GiTakeMyMoney } from "react-icons/gi";

const Header = ({cart, setCart}) => {

  const [isPurchase, setIsPurchase] = useState(true); 

  const navigate = useNavigate();

  const handlePurchasePageClick = () => {

    navigate(`/purchase`);
    setIsPurchase(true);

  }

  const handleSalePageClick = () => {

    navigate('/sales');
    setIsPurchase(false);

  }

  const handleSaleForm = () => {console.log("Colocando livro a venda")}

  return (
    <header className='flex justify-between px-4 sm:px-6 md:px-10 lg:px-28 bg-green-300 w-full fixed z-20'>
      <div className='flex gap-2 sm:gap-4 items-center'>
        <FaBookOpenReader className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white my-4 sm:my-6 md:my-8 lg:my-10' />
        <h3 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'>BookParadise</h3>
      </div>
      <section className='flex gap-28'>
        <NavigationMenu>
          <NavigationMenuList className = "flex gap-4">
            <NavigationMenuItem>
              <Button variant="link" onClick = {() => handlePurchasePageClick()} className = {`text-2xl text-white ${isPurchase ? 'underline' : 'no-underline'}`}>Compra</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" onClick = {() => handleSalePageClick()} className = {`text-2xl text-white ${isPurchase ? 'no-underline' : 'underline'}`}>Venda</Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <button>
          {isPurchase ? <FaShoppingCart onMouseOver={() => setCart(true)} onMouseOut={() => setCart(false)} className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white' />
          : <GiTakeMyMoney onClick={() => handleSaleForm()} className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white'/>
          }
        </button>  
      </section>    
    </header>
  );
};

export default Header;
