import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
//Action creator
export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    orderId: id,
    orderData: orderData
  };
};
export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};



export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json", orderData)
      .then(response => {
        //console.log('[OrderData personName:]',response.data.name.orderData.name);

        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        console.log(error);
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const deleteOrder = (id) => {
  // axios.delete(url, { data: { foo: "bar" } });
  console.log(id);
  return dispatch => {
    axios
    .delete('/orders/' + id + '.json')
    .then( response => {
      console.log('[deleteOrder:]',response);
      console.log('/orders/' + id + '.json');
      console.log('/orders.json');
      window.location.href = window.location.pathname + window.location.search + window.location.hash;
    });
  };
  // return {
  //   type: actionTypes.DELETE_ORDER,
  //   actionId: id
  // }
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
    error: error
  };
};
export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

// export const reloadPage =() => {
//   return{
//     type: actionTypes.RELOAD
//   }
// };

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get("/orders.json")
      .then(res => {
        //Converting the object from server in to an array.
        const fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
