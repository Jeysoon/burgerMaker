import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
    //Transforming an object into an array
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey =>{
        //Transform this string value in to an array
        return [...Array(props.ingredients[igKey] )].map((_,i) => {
            return  <BurgerIngredient key={igKey + i} type={igKey} />;
        }); //[,]
    })
    .reduce((arr, el)=>{
        return arr.concat(el)
    },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;