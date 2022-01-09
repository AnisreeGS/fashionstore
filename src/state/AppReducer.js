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
  EDITROW,
  // SETSORT,
  // ADDPRODUCT
} from "../constants/storeConstants";

export default function AppReducer(state = initialState, action) {
  const handleDelete = (arr, productId) => {
    return arr.filter((el) => {
      return el.id !== productId;
    });
  };
  const handleEdit = (arr, productId) => {
    return arr.filter((el) => {
      if (el.id === productId) {
        return state.product;
      }
    })[0];
  };
  switch (action.type) {
    case DELETEROW:
      let datas = handleDelete(state.productArray, action.payload);
      return {
        ...state,
        productArray: datas,
      };

    case EDITROW:
      let toedit = handleEdit(state.productArray, action.payload);
      return {
        ...state,
        product: toedit,
      };

    case SETBRAND:
      return {
        ...state,
        product: {
          ...state.product,
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
    case ADDTOARRAY: {
      if (state.product.id) {
        const newProductArray = state.productArray.filter((product) =>product.id!==state.product.id )
        return {
          ...state,
          productArray: [
            ...newProductArray,
            { ...state.product },
          ],
          product: initialState.product,
        };
      } else {
        return {
          ...state,
          productArray: [
            ...state.productArray,
            { ...state.product, id: Date.now() },
          ],
          product: initialState.product,
        };
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
