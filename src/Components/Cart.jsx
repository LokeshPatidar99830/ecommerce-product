import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAll, decrementquantity, incementquantity, removecart } from '../Features/Product_Slice';
import { Link } from 'react-router-dom';

const Cart = () => {

  const dispatch =useDispatch();
  const cartitem = useSelector((state)=>state.product);
  const subTotal =cartitem.cartvalue.reduce((total,item)=>total+(item.price*item.quantity),0);
  return (
    <><div className='boss'>
        <h1>M<u>y Car</u>t</h1><br />
        {
           cartitem.cartvalue.length ===0?(<p><b>Your cart was empty.... </b>
            <p><b>Start Shopping <Link id='cartlink' to='/'>Go To Home</Link>page </b></p></p>):
      (
            <div className='cartdiv'>
              <div id='heading'>
                
                <button id='clearall' onClick={()=>{dispatch(clearAll())}}>Clear All</button>
                </div> 
            
            {
             cartitem.cartvalue.map((val,indx)=>(
            <div className='detailcart' key={indx}>
              <img src={val.image} alt="" />
              <div className='items'>
               <b> <p>Title:{val.title}</p>
                <p>Price:{val.price}</p></b>
                
                <div className='space'>
                <div className='quantitydiv'>
                  <button id='quantitybtn' onClick={()=>{dispatch(incementquantity(val.id))}}>+</button>
                  {val.quantity}
                  <button id='quantitybtn' onClick={()=>{dispatch(decrementquantity(val.id))}}>-</button>
                  </div>
                  <p> <u>Rs:{val.price*val.quantity} </u></p>
                  </div>
                  <button id='deletebtn' onClick={()=>{dispatch(removecart(val.id))}}>Delete</button>
                </div>
                </div>
            ))
        }
           <p id='subtotal' ><u>SubTotal: Rs.{Math.round(subTotal)} </u> </p>
      
      </div>
)
}
</div>
    </>
  )
}



export default Cart
