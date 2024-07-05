import React from 'react'
import './card.css'
function Card({product,addtocart}) {
  return (
    <div className='card-container'>
        <img  className='img' src={product.image}/>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <button onClick={function(){
          addtocart(product)
        }}>Add to cart</button>
    </div>
  )
}

export default Card