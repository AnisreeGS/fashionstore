import {
  initialState,
  SETDRESSTYPE,
  SETBRAND,
  SETIDEALFOR,
  SETPRICE,
  SETQUANTITY,
  SETPRODUCTS,
  ADDTOARRAY,
  DELETEROW,
  // SETSORT,
  // ADDPRODUCT
} from "../constants/storeConstants";

export default function AppReducer(state = initialState, action) {
  const handleDelete=(arr,element)=>{
    return arr.filter((el)=>{
      return el !==element
    })
  }
  switch (action.type) {   
    case DELETEROW:
        let datas = handleDelete(state.productArrayToBeDisplayed,action.payload);
        return{
          ...state,
          productArrayToBeDisplayed: datas,
        }
      
    case SETBRAND:
      return {
        ...state,
        product: {
          ...state.product,
          id: Date.now(),
          brand: action.payload,
        },
      };
    case SETDRESSTYPE:
      return {
        ...state,
        product: {
          ...state.product,
          dresstype: action.payload,
        },
      };
    case SETPRICE:
      return {
        ...state,
        product: {
          ...state.product,
          price: action.payload,
        },
      };
    case SETQUANTITY:
      return {
        ...state,
        product: {
          ...state.product,
          quantity: action.payload,
        },
      };
    case SETPRODUCTS:
      return {
        ...state,
        product: {
          ...state.product,
          products: action.payload,
        },
      };
    case SETIDEALFOR:
      return {
        ...state,
        product: {
          ...state.product,
          idealfor: action.payload,
        },
      };
      case ADDTOARRAY:{
        return {
          ...state,
          productArray:[
            ...state.productArray,state.product],
            product:initialState.product
          }
      }
    default:
      return state;
    // case ADDPRODUCT:
    //   return {
    //     ...state,
    //     productArray: [
    //       ...state.productArray,
    //       action.payload,
    //     ],
    //   };
    // case SETSORT:
    //   return {
    //     [...productArray].sort(function(a,b){return a.price -b.price})
    //   };
  }
}
