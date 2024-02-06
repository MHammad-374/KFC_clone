import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/main'
import categories from './data/categories.json'




function App() {
  let [catId, setCatId] = useState(1)
  let [itemsCart, setItemsCart] = useState([])
  


  const selection = (catid) => {
    setCatId(catId = catid)
  }


  let addtocart = (itemId) => {
    // console.log('ItemsCart state:', itemsCart);
    // console.log(catId, itemId)
    const category = categories.find((cat) => cat.id === catId);
    if (category) {
      const item = category.items.find((item) => item.id === itemId);
      if (item) {
        const updatedCart = [...itemsCart, item];
        setItemsCart(updatedCart);
      }
    }    
  }








  return (
    <>
      <Header selection={selection} itemsCart={itemsCart} />
      <Main catId={catId} addtocart={addtocart} />
    </>
  )
}

export default App;
