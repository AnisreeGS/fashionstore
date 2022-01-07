import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ADDTOARRAY} from "../constants/storeConstants"
import {updatebrand,updatedresstype,updateprice,updatequantity,updateIdealfor,updateproduct, updateid} from '../store/action/index'
import {Link, useNavigate} from 'react-router-dom';

export default function AddProducts() {
  const currentBrand = useSelector((state) => state.product.brand);
  const currentDresstype = useSelector((state) => state.product.dresstype);
  const currentPrice = useSelector((state) => state.product.price);
  const currentQuantity = useSelector((state) => state.product.quantity);
  const currentIdealfor = useSelector((state) => state.product.idealfor);
  const currentProducts = useSelector((state) => state.product);
  const productArray = useSelector((state) => state.productArray);
  const dispatch = useDispatch();
 console.log(currentProducts);
 console.log(productArray);
//  const navigate = useNavigate();
// const toProductList = ()=>{
//   navigate('/productslist',dispatch({type:ADDTOARRAY,payload:""}));
//     }
  return (
    <div>
      <h2>Add Product</h2>
 
      <TextField
        id="brand"
        label="Brand"
        variant="outlined"
        value={currentBrand}
        onChange={(e) => dispatch(updatebrand(e.target.value))}
      />
      <br />
      <br />  

      <TextField
        id="dresstype"
        label="Dress Type"
        variant="outlined"
        value={currentDresstype}
        onChange={(e) => dispatch(updatedresstype(e.target.value))}
      />
      <br />
      <br />
      <TextField
        id="outlined-adornment-amount"
        type='number'
        value={currentPrice}
        label="Price"
        variant="outlined"
        onChange={(e) => dispatch(updateprice(parseInt(e.target.value)))}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Quantity"
        value={currentQuantity}
        type="number"
        variant="outlined"
        onChange={(e) => dispatch(updatequantity(parseInt(e.target.value)))}
      />
      <br />
      <br />
      <FormControl component="fieldset">
        <FormLabel component="legend">Ideal for</FormLabel>
        <RadioGroup
          value={currentIdealfor}
          row
          aria-label="gender"
          defaultValue="female"
          name="row radio-buttons-group"
          onChange={(e) => dispatch(updateIdealfor(e.target.value))}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <Button
        variant="contained"
        size="large"
        onClick={() => dispatch({type:ADDTOARRAY,payload:""})
        // ,{toProductList}
      }
        // onClick={()=>dispatch({type:SETPRODUCTS,payload:""})}
      >
        Add
      </Button>
      {/* <Link to="/productslist">Show Products</Link> */}
    </div>
  );
}
