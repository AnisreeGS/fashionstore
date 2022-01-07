import * as React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


export default function ProductsList() {
    const productArrayToBeDisplayed = useSelector((state) => state.productArray)
    const dispatch = useDispatch();
    console.log(productArrayToBeDisplayed);
    return (
    <div>
        <h2>product list</h2>
        <ol>
        {productArrayToBeDisplayed.map((product)=>
            <li>
                <b>Product Id: </b> {product.id}<br/>
               <b>Brand: </b> {product.brand}<br/>
               <b> Dress: </b>{product.dresstype}<br/>
               <b>Price: </b>{product.price}<br/>
               <b>Quantity: </b>{product.quantity}<br/>
              <b> Ideal for: </b>{product.idealfor}<br/><br />
            </li>
        )}
        </ol>
    </div>
    )
}    

