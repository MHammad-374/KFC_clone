import React, { useState } from 'react'
import '../App.css'
import cart from '../images.png';
import Cartinside from './Cart-Inside';



export default function CartOffcanvas({itemsCart}) {
  

  return (
    <>
      <button className="btn btn-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <img srcSet={cart} alt="" className="cart" />
        <h1 className="show-cart-items">{itemsCart.length} Item</h1>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header bg-black">
          <h4 className="offcanvas-title text-white" id="offcanvasRightLabel">Cart Items</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="cart-item-underline"></div>
        <div className="offcanvas-body bg-black">
          <Cartinside itemsCart={itemsCart} />
          
        </div>
      </div>

    </>
  )
}