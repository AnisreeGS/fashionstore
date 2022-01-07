import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import sortPrice from "../utils/Sort";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DELETEROW } from "../constants/storeConstants";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function BasicTable() {
  const productArrayToBeDisplayed = useSelector((state) => state.productArray);
  const [data, setdata] = useState(productArrayToBeDisplayed);
  const dispatch = useDispatch()
  const sortPrice = () => {
    const a = [...productArrayToBeDisplayed];
    console.log(a);
    setdata(a.sort((a, b) => (a.price > b.price ? 1 : -1)));
  };
  console.log(data);

  const sortPriceHighToLow = () => {
    const high = [...productArrayToBeDisplayed];
    setdata(high.sort((a, b) => (a.price < b.price ? 1 : -1)));
  };

  
  // const removeSelectedRow = (arr,ele)=>{
  //   const selectedRow =[...productArrayToBeDisplayed]
  //     if(arr.selectable===true){
  //       return arr.filter((el)=>{
  //         return el !== ele
  //       })
  //     } 
  // }



  const handleEdit = ()=>{
    
  }


  return (
    <>
      <button  onClick={sortPrice}>Price Low - High</button>
      <button onClick={sortPriceHighToLow}> Price High - Low</button>
      {/* <button onClick={removeSelectedRow}> Delete </button> */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow selectable={false}>
              {/* <TableCell align="right"><Checkbox {...label} /></TableCell> */}
              <TableCell>Product Id</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Dress Type&nbsp;</TableCell>
              <TableCell align="right">Price&nbsp;</TableCell>
              <TableCell align="right">Quantity&nbsp;</TableCell>
              <TableCell align="right">Ideal For&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell align="right"><Checkbox {...label} /></TableCell> */}
                <TableCell component="th" scope="row">{row.id}</TableCell>
                <TableCell align="right">{row.brand}</TableCell>
                <TableCell align="right">{row.dresstype}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.idealfor}</TableCell>
                <TableCell align="right"><button onClick={()=>handleEdit}><EditIcon/></button></TableCell>
                <TableCell align="right"><button onClick={()=>dispatch({type:DELETEROW,payload:""})}><DeleteIcon/></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
