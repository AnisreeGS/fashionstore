import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Sort() {
    const productArrayToBeDisplayed = useSelector((state) => state.productArray);
    const [data,setdata] = useState(productArrayToBeDisplayed)
    
    const sortPrice = () =>{
      const a = [...productArrayToBeDisplayed];
      console.log(a) 
      setdata( a.sort((a, b) => (a.price > b.price) ? 1 : -1))
     
    }
    return (
        <div>
            {sortPrice}
        </div>
    )
}
