import React from 'react'
import { Link } from 'react-router-dom'
import{FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'

const Header = () => {

  const productstate =useSelector((state)=>state.product);
  return (
    <div>
      <nav>
        <ul className='header'>
            <li>
                <Link to ="/home"><u> <b>Home </b></u> </Link></li>
                <li>
                  <button id='cart'>
                <Link to ="/cart"><FaShoppingCart className='icon' /> {productstate.cartvalue.length}</Link></button>
                </li>
            
        </ul>
      </nav>
    </div>
  )
}

export default Header;
