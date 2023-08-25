import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const MealList = ({ meals, onMealClick }) => {
  if (meals === null || meals === undefined) {
    
    return null;
  }

  return (
    <section className='list-section'>
      {meals.length > 0 ? (
        meals.map((meal) => (
          <div key={meal.idMeal}>
            <Link to={`/ingredients/${meal.idMeal}`} className='meal'>
              <img src={meal.strMealThumb} alt={meal.strMeal} className='list-meal-image'/>
              <div className='list-info-block'>
                <h3 className='list-meal-name'>{meal.strMeal}</h3>
                <p className='list-meal-category'>{meal.strCategory}</p>
                <p className='list-meal-country'> | {meal.strArea}</p>
              </div>
            </Link>
          </div>
        ))
      ) : null }
    </section>
  );
};

export default MealList;
