import React from 'react';
import '../App.css';
import category from '../data/categories.json'



export default function Category({selection}) {
    return (
        <>
            <div className="category bg-black">
                {
                    category.map(cat => {
                        return (
                            <>
                                <button
                                 key={cat.id}
                                 type="button" 
                                 className="cat-btn"
                                 onClick={() => selection(cat.id)}
                                >
                                    {cat.title}
                                </button>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}