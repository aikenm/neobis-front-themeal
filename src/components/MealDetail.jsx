import React from 'react';

const MealDetail = ({ meal }) => {
  if (!meal) {
    return <div className='loading-text'>Loading...</div>;
  }

  return (
    <section className='meal-details-section'>
    <div className='meal-details'>
        <div className='md-info-block'>
            <h2 className='md-meal-name'>{meal.strMeal}</h2>
            <p className='md-meal-category'>{meal.strCategory}</p>
            <p className='md-meal-category'> | {meal.strArea}</p>
            <ul className='ingredients'>
                {Object.entries(meal)
                .filter(([key, value]) => key.startsWith('strIngredient') && value)
                .map(([key, value], index) => (
                    <li key={index} className='ingredient'>
                    {value} <b className='measure'>{meal[`strMeasure${key.slice(13)}`]}</b>
                    </li>
                ))}
            </ul>
        </div>
        <img src={meal.strMealThumb} alt={meal.strMeal} className='md-meal-image'/>
    </div>
    <div className='instructions-block'>
      <h3 className='intstructions-title'>Instruction</h3>
      <p className='intstructions-para'>{meal.strInstructions}</p>
    </div>
    <div className='btn-block'>
        <a href={meal.strYoutube} className='youtube-button'>Watch on YouTube</a>
    </div>
    </section>
  );
};

export default MealDetail;
