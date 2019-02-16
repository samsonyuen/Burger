import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
      .map(ing =>
          <li key={ing}>
            <span style={{textTransform: 'capitalize'}}>{ing}</span> : {props.ingredients[ing]}
          </li>);

  return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
        <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
      </>
  )
};

export default orderSummary;