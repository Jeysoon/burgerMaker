import React, { Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import moment from "moment";
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
class Contactdata extends Component {
    state={
        name: '',
        email: '',
        address:{
            street: '',
            postalCode: ''
        },
        loading: false

    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        
    let time_ = moment().format("MMMM Do YYYY, h:mm:ss a");

    this.setState({ loading: true });
    this.setState({ dateTime: time_ });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Jeyson Meza",
        address: {
          street: "Test street",
          zipCode: "80200",
          country: "Mexico"
        },
        email: "jeyson@test.com"
      },
      deliveryMethod: "pro",
      purchaseDateTime: this.state.dateTime
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false});
        this.props.history.push('/'); 
      })
      .catch(error => {
        this.setState({ loading: false});
      });
    }
    render(){
        let form = (
            <form>
                <Input inputType="input" type="text" name="name" placeholder="Your name" />
                <Input inputType="input" type="email" name="mail" placeholder="Your mail" />
                <Input inputType="input" type="text" name="street" placeholder="Street" />
                <Input inputType="input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
             </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
               {form}
            </div>
        );
    }
}

export default Contactdata;