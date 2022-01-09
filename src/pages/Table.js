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
import { DELETEROW,EDITROW } from "../constants/storeConstants";
import {Link} from "react-router-dom"

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function BasicTable() {
  const productArray = useSelector((state) => state.productArray);
  const dispatch = useDispatch();
  const [sort, setSort] = useState('');

  const getSortedDataDesc = () => {
    return [...productArray].sort((a, b) => (a.price < b.price ? 1 : -1));
  }

  const getSortedDataAsc = () => {
    return [...productArray].sort((a, b) => (a.price > b.price ? 1 : -1));
  }

  const getList = () => {
    if(sort === 'Asc') return getSortedDataAsc();
    else if (sort === 'Desc') return getSortedDataDesc();
    else return [...productArray];
  }

  
  // const removeSelectedRow = (arr,ele)=>{
  //   const selectedRow =[...productArray]
  //     if(arr.selectable===true){
  //       return arr.filter((el)=>{
  //         return el !== ele
  //       })
  //     } 
  // }



  // const handleEdit = ()=>{

    
  // }


  return (
    <>
      <button  onClick={() => setSort('Asc')}>Price Low - High</button>
      <button onClick={() => setSort('Desc')}> Price High - Low</button>
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
              <TableCell align="right">Edit&nbsp;</TableCell>
              <TableCell align="right">Delete&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getList().map((row) => (
              // <EditRow product={product}/>
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
                <TableCell align="right"><button onClick={()=>dispatch({type:EDITROW,payload:row.id})}><Link to="/addproducts"><EditIcon/></Link></button></TableCell>
                <TableCell align="right"><button onClick={()=>dispatch({type:DELETEROW,payload:row.id})}><DeleteIcon/></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
