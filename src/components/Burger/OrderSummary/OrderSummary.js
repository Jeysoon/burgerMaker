import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    //I expect to get ingredients as props
    /* Also i expect to get my ingredients 
    in an object format
    */ 
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey=>{
        return <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li> 
    });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p><strong>Total Price:</strong> {props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p> 
            <Button
            btnType={'Danger'}>Cancel</Button>
            <Button
            btnType={'Success'}>Continue!</Button>
        </Aux>
    );
};
export default orderSummary;