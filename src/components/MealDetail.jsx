import React from 'react';

const MealDetail = ({ meal }) => {
  if (!meal) {
    return <div className='loading-text'>Loading...</div>;
  }

  return (
    <section className='meal-details'>
    <div className='info-block'>
      <h2 className='meal-name'>{meal.strMeal}</h2>
      <p className='meal-category'>{meal.strCategory}</p>
      <p className='meal-country'> | {meal.strArea}</p>
      <h3 className='ingrediens-title'>Ingredients</h3>
      </div>
      <img src={meal.strMealThumb} alt={meal.strMeal} className='meal-image'/>
      <ul>
        {Object.entries(meal)
          .filter(([key, value]) => key.startsWith('strIngredient') && value)
          .map(([key, value], index) => (
            <li key={index}>
              {value} - {meal[`strMeasure${key.slice(13)}`]}
            </li>
          ))}
      </ul>
      <h3 className='intstructions-title'>Instructions</h3>
      <p className='intstructions-para'>{meal.strInstructions}</p>
    </section>
  );
};

export default MealDetail;
