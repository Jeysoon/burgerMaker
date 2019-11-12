import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

//Action creator
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };

} ;

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
    }
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios
        .post("/orders.json", orderData)
        .then(response => {
            console.log(response.data);
            dispatch(purchaseBurgerSuccess(response.data, orderData));
        })
        .catch(error => {
            dispatch(purchaseBurgerFail( error ));
        });
    }
};