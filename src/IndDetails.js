import React from 'react'
import { useLocation } from 'react-router-dom'
import './styles/detail.css'
function IndDetails  (){
    let location=useLocation();
    let product=location.state
    
  return (
    <center>
       <img  src={product.image} />
       <h1>{product.title}</h1>
       <h4>{product.description}</h4>
    </center>
  )
}

export default IndDetails