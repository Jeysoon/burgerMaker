import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
    {label: 'Bacon', type:'bacon'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price}</strong></p>
    {/*Loop trough "controls" ES6's constant*/} 
    {controls.map(ctrl => (
        <BuildControl  
        added={()=> props.ingredientAdded(ctrl.type)}
        removed={()=>props.ingredientRemoved(ctrl.type)} 
        key={ctrl.label} 
        label={ctrl.label}
        disabled={props.disabled[ctrl.type]} />
    ))}
    </div>

);
export default buildControls;