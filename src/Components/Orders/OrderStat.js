import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineTakeoutDining } from "react-icons/md";
import { LuUtensilsCrossed } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";

import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

const OrderStat = ({ data }) => {


  const icons = (name) => {
    switch (name) {
      case "Revenue":
        return <MdArrowOutward className='icon1' />;
      case "Orders":
        return <FaShoppingCart className='icon2' />;
      case "Dine in":
        return <LuUtensilsCrossed className='icon3' />;
      case "Take away":
        return <MdOutlineTakeoutDining className='icon4' />;
      default:
        return null;
    }
  };

  const arrow = (name1) => {
    switch (name1) {
      case "Revenue":
        return (
          <div className='ooorder'>
            <IoIosArrowRoundDown />
            <p>10%</p>
          </div>
        );
      case "Orders":
        return (
          
          <div className='ooorders para'>
            <IoIosArrowRoundUp /><p>20%</p>
          </div>
        )
      case "Dine in":
        return (
          <div className='ooorder para'>
            <IoIosArrowRoundDown/> <p>10%</p>
          </div>
        )
      case "Take away":
        return (
          <div className='ooorders para'>
            <IoIosArrowRoundUp /><p>5%</p>
          </div>
        )
      default:
        return null;
    }
  };

  return (
    <div className='boxes'>
      {
        data.map(x => (
          <div className='box'>
            <div className='box1'>
              <h3>{x.name}</h3>
              {arrow(x.name)}
            </div>
            <div className='box2'>
              {icons(x.name)}
              <h2>{x.money}</h2>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default OrderStat