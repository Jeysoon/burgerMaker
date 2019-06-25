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
    {/*Loop trough "controls" ES6's constant*/}
    {controls.map(ctrl => (
        <BuildControl 
        added={()=> props.ingredientAdded(ctrl.type)} 
        key={ctrl.label} 
        label={ctrl.label} />
    ))}
    </div>

);
export default buildControls;