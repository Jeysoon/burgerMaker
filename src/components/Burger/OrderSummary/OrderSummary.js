import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
  //This could be a functional component, doesnt have t be a class.

  // componentWillUpdate(){
  //     console.log('[OrderSummary] willUpdate');
  // }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <h4>{this.props.dateTime}</h4>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price:</strong> {this.props.price.toFixed(2)}
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType={"Danger"}>Cancel</Button>
        <Button clicked={this.props.continueClicked} btnType={"Success"}>
          Continue!
        </Button>
      </Aux>
    );
  }
}
export default OrderSummary;
