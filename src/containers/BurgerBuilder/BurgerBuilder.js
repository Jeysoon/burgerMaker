import React , { Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount
        this.setState({ingredients: updatedIngredients});


    };

    render() {    
    return(
        <Aux>   
            <Burger ingredients={this.state.ingredients} />
            <BuildControls click={this.addIngredient} 
            ingredientAdded={this.addIngredientHandler}/>
            <div>
            </div>
        </Aux>    
        );
    }
}

export default BurgerBuilder;