import React, { useState } from 'react'
import '../App.css'
import categories from '../data/categories.json'


export default function Cartinside({ itemsCart }) {
    // let [quantity, setQuantity] = useState(1)



    // let yet = category[itemsCart]






    let emptyCart = false



    let increment = (item) => {
        item.quantity++
        console.log(item.quantity)
    }
    let decrement = (item) => {
        if (item.quantity > 1)
            item.quantity--
        console.log(item.quantity)
    }
    return (
        <>
            {emptyCart ?
                (
                    <div className="cart-img-decs">
                        <img className='cart-image' alt="" srcSet="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png" />
                        <h4 className="cart-desc">You haven’t added any items in bucket yet</h4>
                    </div>
                )
                :
                (
                    <div className="cart-img-decs">
                        {
                            itemsCart.map(item => {
                                return (
                                    <>
                                        <div className="selected-items " key={item.id} >
                                            <div className="img-title-price">
                                                <img srcSet={item.image} alt="" className="selectedItem-img" />
                                                <div className="Heading-Price">
                                                    <h6 className='selectedItem-title'>{item.title}</h6>
                                                    <h6 className="selectedItem-price">Rs.{(item.price) * (item.quantity)}</h6>
                                                </div>
                                            </div>
                                            <div className="inc-dec" >
                                                <button className="decorinc" onClick={() => decrement(item)}>-</button>
                                                <h5 className="quantity">{item.quantity}</h5>
                                                <button className="decorinc" onClick={() => increment(item)}>+</button>
                                            </div>
                                            <div className="cart-bottom-bar">
                                                <h4 className="inform">0 items | Rs.0</h4>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                )
            }
        </>
    )
}
