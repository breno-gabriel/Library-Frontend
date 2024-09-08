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
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { GiTakeMyMoney } from "react-icons/gi";
import { CiCirclePlus } from "react-icons/ci";

const Header = ({ setForms, forms }) => {
  const [isPurchase, setIsPurchase] = useState(true);

  const navigate = useNavigate();

  const handlePurchasePageClick = () => {
    if (!forms) {
      navigate(`/purchase`);
      setIsPurchase(true);
    }else {
      alert("Você não pode sair enquanto ocorreu uma operação de venda")
    }
  };

  const handleSalePageClick = () => {
    navigate('/sales');
    setIsPurchase(false);
  };

  const handleSaleForm = () => {
    setForms(true)
  };

  return (
    <header className='flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-28 bg-green-300 w-full fixed z-20'>
      <div className='flex items-center gap-2 sm:gap-4'>
        <FaBookOpenReader className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white my-4 sm:my-6 md:my-8 lg:my-10' />
        <h3 className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl'>BookParadise</h3>
      </div>
      <section className='flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
        {/* <NavigationMenu>
          <NavigationMenuList className="flex gap-2 sm:gap-4 md:gap-6">
            <NavigationMenuItem>
              <Button variant="link" onClick={handlePurchasePageClick} className={`text-sm sm:text-lg md:text-xl lg:text-2xl text-white ${isPurchase ? 'underline' : 'no-underline'}`}>
                Compra
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" onClick={handleSalePageClick} className={`text-sm sm:text-lg md:text-xl lg:text-2xl text-white ${isPurchase ? 'no-underline' : 'underline'}`}>
                Venda
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}
        <button>
          <CiCirclePlus
            onClick={() => setForms(true)}
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white'
          />
        </button>
      </section>
    </header>
  );
};

export default Header;
