import React from 'react'
import TableRow from "@mui/material/TableRow";

export default function EditRow({product}) => {
    return (
        <div>
        
            <TableRow>
                <TableCell component="th" scope="row">{product.id}</TableCell>
                <TableCell align="right">{product.brand}</TableCell>
                <TableCell align="right">{product.dresstype}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.quantity}</TableCell>
                <TableCell align="right">{product.idealfor}</TableCell>
            </TableRow>
        </div>
    )
}
