import React, { useState } from 'react';
import '../App.css';
import category from '../data/categories.json'



export default function Main({ catId, addtocart }) {

    


    let selectedCat = category.find(cat => {
        return (
            cat.id === catId
        )
    })



    return (
        <>
            <div className="main">
                <div className="main-grid">
                    <div className="col-umn">
                        <div className="item-class">
                            {selectedCat.title}
                        </div>
                        <div className="red-underline"></div>
                        <div className="deep-bg">
                            {
                                selectedCat.items.map(item => {
                                    return (
                                        <>
                                            <div className="bg-card">
                                                <div className="piece-card">
                                                    <img src={item.image} className="img-card" alt="..." />
                                                    <div className="cardbody">
                                                        <h5 className="title-card">{item.title}</h5>
                                                        <p className="desc-card">{item.discription}</p>
                                                        <span className='card-price'>Rs.{item.price}</span>
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn add-to-cart"
                                                    type="button"
                                                    onClick={() => addtocart(item.id)}
                                                >
                                                    + ADD TO BUCKET
                                                </button>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}