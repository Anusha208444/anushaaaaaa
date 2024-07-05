import React, { useState } from 'react'
import { FaArrowLeft,FaArrowRight} from "react-icons/fa6";


const Conditional = () => {
    const [left, setleft] = useState(false)
  return (
    <div>
        {
           left?(
            <FaArrowRight/>
           ):
           (
            <FaArrowLeft/>
           )
        }
    </div>
  )
}

export default Conditional