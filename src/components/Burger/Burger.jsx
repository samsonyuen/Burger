import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
      .map(ing => {
        return [...Array(props.ingredients[ing])].map(
            (_, index) => {
              return <BurgerIngredient key= {ing + index} type={ing}/>
            }
        );
      });

  return (
        <div className={classes.Burger}>
          <BurgerIngredient type="bread-top"/>
          {transformedIngredients}
          <BurgerIngredient type="bread-bottom"/>
        </div>
  );
};

export default burger;