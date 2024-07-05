import React, { useEffect, useState } from 'react'
import Conditional from './Conditional'


const A = () => {
    const [data, setdata] = useState([])
    async function loadusers(){
       let res= await fetch('https://jsonplaceholder.typicode.com/todos')
       let result=await res.json()
       console.log(result);
       setdata(result)
        console.log(data);
    }
    useEffect(function(){
        loadusers();
    },[])
    
    const [value, setvalue] = useState(0)
    useEffect(function(){
        console.log("side effect performed");

    },[])
    function incr(){
        setvalue(value+1) 
    }
    const [added, setadded] = useState(false)
  return (
    <div>
       <Conditional/>
    </div>
  )
}

export default A