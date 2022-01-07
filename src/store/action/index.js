import {SETBRAND,SETDRESSTYPE,SETPRICE,SETQUANTITY,SETIDEALFOR,SETPRODUCTS,ADDTOARRAY,DELETEROW} from "../../constants/storeConstants"

 export const updatebrand = (payload) =>{
     return{type:SETBRAND,payload}
 }

export const updatedresstype = (payload) =>{
    return{type:SETDRESSTYPE,payload}
}
export const updateprice = (payload) =>{
    return{type:SETPRICE,payload}
}

export const updatequantity = (payload) =>{
    return{type:SETQUANTITY,payload}
}

export const updateIdealfor = (payload) =>{
    return{type:SETIDEALFOR,payload}
}

export const updateproduct = (payload) =>{
    return{type:SETPRODUCTS,payload}
}
export const updateaddtoarray = (payload) =>{
    return{type:ADDTOARRAY,payload}
}
// export const sortTheArray = (payload) =>{
//     return{type:SETSORT,payload}
// }