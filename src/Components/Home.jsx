import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, getProducts } from '../Features/Product_Slice';
import { useEffect } from 'react';
import '../CSS/Cart.css';

function Store  ()  {

    const [filterCategory,setFilterCategory]=useState("");
    const dispatch= useDispatch();
    const productState = useSelector((state)=>state.product);


    useEffect (()=>{
        dispatch(getProducts())
    },[dispatch])

    const categoryProducts  =(category)=>{
      if (category ==="All Products"){
        setFilterCategory("");
      }
      else{
           setFilterCategory(category);
      }

    };

    const filteredProducts = filterCategory?
    productState.data.filter((product)=>product.category === filterCategory):productState.data;

  return (
    <div className='main'>
        <h1> <u> My Store </u></h1><br />
        <label id="option"><b>Choose a Product </b></label>
        <select  id="option" onChange={(e)=>categoryProducts(e.target.value)}>
            <option>All Products</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>

        </select>

    
    <div className='main_div'>
    {filteredProducts.map((product, index) => (

        <div className='detail' key={index}>
          
            <h3>Tittle: {product.title}</h3>
            <h3>Price:{product.price}</h3>
            <h3> Category:   {product.category}</h3>
            <img src={product.image} alt={product.title} />
            <button id="btns" onClick={()=>dispatch(addtocart(product))}>Add to Cart</button>

        </div>
      )  )}


    </div>
    </div>
  )
}

export default Store;
